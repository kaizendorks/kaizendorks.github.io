---
date: 2020-11-13
tags:
  - blog
  - kubernetes
  - DNS
author: Daniel
location: Dublin, Ireland
summary: Brief cheatsheet on how to debug DNS issues inside Kubernetes.
---

# Troubleshooting DNS in Kubernetes Cheatsheet

You have an application running in a Kubernetes cluster and you start experiencing DNS resolution issues. If that's your case, I have found the following steps the most helpful when investigating these issues.

I hope it can help you too and remember, _it's always DNS_.

:::tip
Beyond this cheatsheet, you have a more comprehensive guide in the official [Kubernetes docs](https://kubernetes.io/docs/tasks/administer-cluster/dns-debugging-resolution/)
:::

## 1. Use a container with the necessary utilities
Quickly create a Pod that uses a container with the utilities such as `nslookup` or `dig` that you will need. (You can skip this if you already have a container with these utilities)
```bash
cat <<EOF | kubectl apply -f -
apiVersion: v1
kind: Pod
metadata:
  name: dnsutils
  namespace: default
spec:
  containers:
  - name: dnsutils
    image: gcr.io/kubernetes-e2e-test-images/dnsutils:1.3
    command:
      - sleep
      - "3600"
    imagePullPolicy: IfNotPresent
  restartPolicy: Always
EOF
```

## 2. Check the DNS configuration applied to Pods
Check the contents of the `/etc/resolv.conf` file inside the container.
```bash
$ kubectl exec -ti dnsutils -- cat /etc/resolv.conf
nameserver 10.43.0.10
search default.svc.cluster.local svc.cluster.local cluster.local {... might have other domains here}
options ndots:5
```

You want to make sure the `nameserver` IP corresponds to the IP of the `kube-dns` service and that the service is up and running!
```bash
$ kubectl get service kube-dns -n kube-system
NAME       TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)                  AGE
kube-dns   ClusterIP   10.43.0.10   <none>        53/UDP,53/TCP,9153/TCP   337d
```

## 3. Check if you can resolve the address
Using the `dnsutils` container you added in the first step, attemp to resolve a domain using `nslookup` as in:
```bash
$ kubectl exec -ti dnsutils -- nslookup google.com
Server:         10.43.0.10
Address:        10.43.0.10#53

Non-authoritative answer:
Name:   google.com
Address: 216.58.210.46
Name:   google.com
Address: 2a00:1450:4009:800::200e
```
:::tip
Replace `google.com` with the URL you are having trouble with.
This can either be annother external URL or an internal URL such as `my-service.my-namespace`.
:::

If you cannot resolve it, make sure the `kube-dns` service is healthy, and that the Pods behind are running.

Check also if there is any error reported by those Pods, which are the ones with the label `k8s-app=kube-dns`:
```bash
kubectl logs -n kube-system -l k8s-app=kube-dns --tail 50
```

## 4. Trace the resolution and check for latencies
You can use the `dig` tool to trace the DNS resolution process and inspect the latencies of each network hoop.

For example, you can trace ther resolution of `google.com` using the `dig google.com` command. From the output below, we can see it ends resolving to the expected IP 216.58.210.46 and the response time:
```bash
$ kubectl exec -ti dnsutils -- dig google.com

; <<>> DiG 9.11.6-P1 <<>> google.com
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 29263
;; flags: qr rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 4, ADDITIONAL: 9

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 4096
; COOKIE: 0fbb77fd5accad54 (echoed)
;; QUESTION SECTION:
;google.com.                    IN      A

;; ANSWER SECTION:
google.com.             28      IN      A       216.58.210.46

;; AUTHORITY SECTION:
google.com.             28      IN      NS      ns3.google.com.
google.com.             28      IN      NS      ns2.google.com.
google.com.             28      IN      NS      ns4.google.com.
google.com.             28      IN      NS      ns1.google.com.

;; ADDITIONAL SECTION:
ns2.google.com.         28      IN      AAAA    2001:4860:4802:34::a
ns1.google.com.         28      IN      AAAA    2001:4860:4802:32::a
ns4.google.com.         28      IN      AAAA    2001:4860:4802:38::a
ns1.google.com.         28      IN      A       216.239.32.10
ns3.google.com.         28      IN      A       216.239.36.10
ns4.google.com.         28      IN      A       216.239.38.10
ns2.google.com.         28      IN      A       216.239.34.10
ns3.google.com.         28      IN      AAAA    2001:4860:4802:36::a

;; Query time: 2 msec
;; SERVER: 10.43.0.10#53(10.43.0.10)
;; WHEN: Fri Nov 13 19:19:03 UTC 2020
;; MSG SIZE  rcvd: 517
```

If you want to go deeper, you can use `dig +trace` and see the intermediate steps in the resolution:
```bash
kubectl exec -ti dnsutils -- dig +trace google.com
```

## Using rancher?
I have been hit [by this issue](https://github.com/rancher/rancher/issues/23284) whereby Pods suddenly start getting their IPs assigned in the 172.17.0.0 range.

When this happenes, they are in the wrong network and thus become unreachable from other Pods. Eventually this might affect one or all of the Pods in the `kube-dns` system, which results in intermittent or permanent DNS resolution issues until the Pods are recreated.
