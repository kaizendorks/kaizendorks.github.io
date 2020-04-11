(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{349:function(e,s,t){e.exports=t.p+"assets/img/typical-cluster.5ce3daf2.png"},350:function(e,s,t){e.exports=t.p+"assets/img/minikube-cluster.d0c76028.png"},351:function(e,s,t){e.exports=t.p+"assets/img/kubernetes-dashboard.7748ab40.png"},352:function(e,s,t){e.exports=t.p+"assets/img/dashboard-pods.38b7db02.png"},396:function(e,s,t){"use strict";t.r(s);var a=t(4),r=Object(a.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"clusters-and-nodes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clusters-and-nodes"}},[e._v("#")]),e._v(" Clusters and Nodes")]),e._v(" "),a("p",[e._v("Once you have finished installing the required components, you can easily get your local cluster up and running with the "),a("code",[e._v("minikube start")]),e._v(" command, and you can use "),a("code",[e._v("minikube status")]),e._v(" to confirm.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("div",{staticClass:"highlight-lines"},[a("div",{staticClass:"highlighted"},[e._v(" ")]),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[e._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ minikube start\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(". omitted\n🏄  Done"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),e._v(" kubectl is now configured to use "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"minikube"')]),e._v("\n\n$ minikube status\nm01\nhost: Running\nkubelet: Running\napiserver: Running\nkubeconfig: Configured\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Running online?")]),e._v(" "),a("p",[e._v("You should have already gone through similar steps by completing the linked "),a("a",{attrs:{href:"https://www.katacoda.com/courses/kubernetes/launch-single-node-cluster",target:"_blank",rel:"noopener noreferrer"}},[e._v("katacoda tutorial"),a("OutboundLink")],1),e._v(". This means you already have a working cluster using minikube and an shell where you can issue "),a("code",[e._v("minikube")]),e._v(" and "),a("code",[e._v("kubectl")]),e._v(" commands.")])]),e._v(" "),a("h2",{attrs:{id:"node-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-types"}},[e._v("#")]),e._v(" Node types")]),e._v(" "),a("p",[e._v("By initializing "),a("a",{attrs:{href:"https://github.com/kubernetes/minikube",target:"_blank",rel:"noopener noreferrer"}},[e._v("minikube"),a("OutboundLink")],1),e._v(", you should also get "),a("a",{attrs:{href:"https://kubernetes.io/docs/reference/kubectl/overview/",target:"_blank",rel:"noopener noreferrer"}},[e._v("kubectl"),a("OutboundLink")],1),e._v(" configured in your local machine, so you can issue "),a("code",[e._v("kubectl")]),e._v(" commands to your local cluster.")]),e._v(" "),a("ul",[a("li",[e._v("Let's see what the status of the cluster is:"),a("div",{staticClass:"language-bash extra-class"},[a("div",{staticClass:"highlight-lines"},[a("div",{staticClass:"highlighted"},[e._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ kubectl cluster-info\nKubernetes master is running at https://192.168.64.3:8443\nKubeDNS is running at https://192.168.64.3:8443/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy\n\nTo further debug and diagnose cluster problems, use "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'kubectl cluster-info dump'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v("\n")])])])]),e._v(" "),a("li",[e._v("Let's also list the nodes in your cluster:"),a("div",{staticClass:"language-bash extra-class"},[a("div",{staticClass:"highlight-lines"},[a("div",{staticClass:"highlighted"},[e._v(" ")]),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ kubectl get nodes\nNAME       STATUS   ROLES    AGE   VERSION\nminikube   Ready    master   37m   v1.18.0\n")])])])])]),e._v(" "),a("p",[e._v("Good, that means the single node cluster has correctly been configured and is working. It also confirms "),a("code",[e._v("kubectl")]),e._v(" is correctly configured to interact with that cluster.")]),e._v(" "),a("p",[e._v("Let’s pause for a moment. What do we mean by "),a("strong",[e._v("cluster")]),e._v("? And by "),a("strong",[e._v("node")]),e._v("?")]),e._v(" "),a("p",[e._v("Kubernetes clusters are formed by a number of nodes that typically have the role of either "),a("strong",[e._v("master")]),e._v(" or "),a("strong",[e._v("workers")]),e._v(":")]),e._v(" "),a("ul",[a("li",[e._v("The workers are the nodes where applications are deployed. This is where the docker containers that form your application actually run.")]),e._v(" "),a("li",[e._v("While the masters are the nodes you tell what you want to deploy and ensure it actually gets deployed across the workers. While a "),a("a",{attrs:{href:"https://kubernetes.io/docs/concepts/overview/components/",target:"_blank",rel:"noopener noreferrer"}},[e._v("number of components"),a("OutboundLink")],1),e._v(" make this possible, during the tutorial we will consider each master as a single black box.")])]),e._v(" "),a("h2",{attrs:{id:"cluster-sizes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cluster-sizes"}},[e._v("#")]),e._v(" Cluster sizes")]),e._v(" "),a("p",[e._v("Typically, a cluster will have multiple nodes of each type, each of them being an independent machine. This makes your cluster resilient to a number of faults, increasing its "),a("em",[e._v("availability")]),e._v(".")]),e._v(" "),a("ul",[a("li",[e._v("Quite often, these will be VMs (Virtual Machines) provided by services such as AWS, Azure or Google Cloud.")]),e._v(" "),a("li",[e._v("It is also common to use one of the "),a("em",[e._v("Kubernetes as a service")]),e._v(" offerings such as "),a("a",{attrs:{href:"https://aws.amazon.com/eks/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Amazon's EKS"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://azure.microsoft.com/en-us/services/kubernetes-service/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure's AKS"),a("OutboundLink")],1),e._v(" or "),a("a",{attrs:{href:"https://cloud.google.com/kubernetes-engine",target:"_blank",rel:"noopener noreferrer"}},[e._v("Google's GKE"),a("OutboundLink")],1),e._v(". These remove some of the heavy lifting involved in setting up the cluster, letting you pick how many machines you need and of which type.")])]),e._v(" "),a("p",[a("img",{attrs:{src:t(349),alt:"Typical cluster"}})]),e._v(" "),a("p",[e._v("How does this apply to what we have done so far?")]),e._v(" "),a("p",[e._v("Since we are using "),a("code",[e._v("minikube")]),e._v(", our cluster is made of a single node that performs all the work by itself, acting with both roles of "),a("strong",[e._v("master")]),e._v(" and "),a("strong",[e._v("worker")]),e._v(". This node is a virtual machine (VM) running in your laptop, which according to the "),a("code",[e._v("cluster-info")]),e._v(" output above is located at the local IP "),a("code",[e._v("192.168.64.3")])]),e._v(" "),a("p",[a("img",{attrs:{src:t(350),alt:"Minikube cluster"}})]),e._v(" "),a("h2",{attrs:{id:"exploring-the-cluster-contents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exploring-the-cluster-contents"}},[e._v("#")]),e._v(" Exploring the cluster contents")]),e._v(" "),a("p",[e._v("Let's continue this section by exploring the contents of our "),a("em",[e._v("empty cluster")]),e._v(" (you will see is not so empty) while getting used to some of the "),a("code",[e._v("kubectl")]),e._v(" and "),a("code",[e._v("minikube")]),e._v(" commands.")]),e._v(" "),a("p",[e._v("First, let's see what applications or services are currently deployed in the cluster by inspecting its current "),a("strong",[e._v("Pods")]),e._v(".\nFor this we will use the "),a("code",[e._v("kubectl get")]),e._v(" command, which lets you list objects of a given type.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[e._v("Don't worry for now about the concept of "),a("code",[e._v("Pod")]),e._v(" or the "),a("code",[e._v("--all-namespace")]),e._v(" argument. We will explore these in the "),a("RouterLink",{attrs:{to:"/tutorials/kubernetes/2-basic-kubernetes-objects.html"}},[e._v("next module")]),e._v("!")],1)]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("div",{staticClass:"highlight-lines"},[a("div",{staticClass:"highlighted"},[e._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ kubectl get pod --all-namespaces\nNAMESPACE     NAME                               READY   STATUS    RESTARTS   AGE\nkube-system   coredns-66bff467f8-6khs7           "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("          53m\nkube-system   coredns-66bff467f8-w8x67           "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("          53m\nkube-system   etcd-minikube                      "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("          53m\nkube-system   kube-apiserver-minikube            "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("          53m\nkube-system   kube-controller-manager-minikube   "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("          53m\nkube-system   kube-proxy-m7mrz                   "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("          53m\nkube-system   kube-scheduler-minikube            "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("          53m\nkube-system   storage-provisioner                "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("          53m\n")])])]),a("p",[e._v("Not so empty indeed! Every cluster needs to host several services so Kubernetes can do its work, which is to host your application and services and to expose them so you and other applications/services can interact with them.")]),e._v(" "),a("h2",{attrs:{id:"basic-cpu-and-memory-stats"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic-cpu-and-memory-stats"}},[e._v("#")]),e._v(" Basic CPU and Memory stats")]),e._v(" "),a("p",[e._v("Next, let's take a look at how well is our cluster performing by checking some basic CPU and Memory stats using the "),a("code",[e._v("kubectl top")]),e._v(" command.\nBefore we can do so, you will need to enable an "),a("a",{attrs:{href:"https://minikube.sigs.k8s.io/docs/tasks/addons/",target:"_blank",rel:"noopener noreferrer"}},[e._v("add-on"),a("OutboundLink")],1),e._v(" for minikube so these metrics are available in your local learning environment.")]),e._v(" "),a("p",[e._v("We can use the "),a("code",[e._v("minikube addons")]),e._v(" to both see the list of all possible addons and to enable/disable them.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("div",{staticClass:"highlight-lines"},[a("div",{staticClass:"highlighted"},[e._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ minikube addons list\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("-----------------------------"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("----------"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("--------------"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("         ADDON NAME          "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" PROFILE  "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("    STATUS    "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("-----------------------------"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("----------"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("--------------"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" dashboard                   "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" minikube "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" disabled     "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" default-storageclass        "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" minikube "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" enabled ✅   "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" efk                         "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" minikube "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" disabled     "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" freshpod                    "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" minikube "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" disabled     "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" gvisor                      "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" minikube "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" disabled     "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" helm-tiller                 "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" minikube "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" disabled     "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" ingress                     "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" minikube "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" disabled     "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" ingress-dns                 "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" minikube "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" disabled     "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" istio                       "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" minikube "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" disabled     "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" istio-provisioner           "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" minikube "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" disabled     "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" logviewer                   "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" minikube "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" disabled     "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" metrics-server              "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" minikube "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" disabled     "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" nvidia-driver-installer     "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" minikube "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" disabled     "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" nvidia-gpu-device-plugin    "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" minikube "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" disabled     "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" registry                    "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" minikube "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" disabled     "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" registry-aliases            "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" minikube "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" disabled     "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" registry-creds              "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" minikube "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" disabled     "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" storage-provisioner         "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" minikube "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" enabled ✅   "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" storage-provisioner-gluster "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" minikube "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" disabled     "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("-----------------------------"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("----------"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("--------------"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("\n")])])]),a("p",[e._v("We will enable the "),a("strong",[e._v("metrics-server")]),e._v(" addon. It enables a ligthweight in-memory service (called "),a("a",{attrs:{href:"https://kubernetes.io/docs/tasks/debug-application-cluster/resource-usage-monitoring/#resource-metrics-pipeline",target:"_blank",rel:"noopener noreferrer"}},[e._v("metrics-server"),a("OutboundLink")],1),e._v(") that collects the CPU and memory stats:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ minikube addons "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("enable")]),e._v(" metrics-server\n")])])]),a("p",[e._v("Once enabled, we can see the CPU/memory stats grouped by node (remember in minikube there is a single node). For this we can use the "),a("code",[e._v("kubectl top")]),e._v(" command")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("div",{staticClass:"highlight-lines"},[a("div",{staticClass:"highlighted"},[e._v(" ")]),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ kubectl "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("top")]),e._v(" node\nNAME       CPU"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("cores"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("   CPU%   MEMORY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("bytes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("   MEMORY%\nminikube   218m         "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("10")]),e._v("%    1185Mi          "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("31")]),e._v("%\n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",[e._v("Note the metrics server might take a while to initialize! You will see the output "),a("code",[e._v("error: metrics not available yet")]),e._v(" if it's still initializing")])]),e._v(" "),a("p",[e._v("The same command to see the stats breakdown by Pod")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("div",{staticClass:"highlight-lines"},[a("div",{staticClass:"highlighted"},[e._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ kubectl "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("top")]),e._v(" pod --all-namespaces\nNAMESPACE              NAME                                         CPU"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("cores"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("   MEMORY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("bytes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\nkube-system            coredns-66bff467f8-6khs7                     2m           6Mi\nkube-system            coredns-66bff467f8-w8x67                     1m           6Mi\nkube-system            etcd-minikube                                24m          38Mi\nkube-system            kube-apiserver-minikube                      44m          256Mi\nkube-system            kube-controller-manager-minikube             11m          36Mi\nkube-system            kube-proxy-m7mrz                             0m           8Mi\nkube-system            kube-scheduler-minikube                      2m           9Mi\nkube-system            metrics-server-7bc6d75975-pwldm              0m           10Mi\nkube-system            storage-provisioner                          0m           14Mi\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",[e._v("Now that you have seen a couple of kubectl commands "),a("code",[e._v("kubectl get")]),e._v(" and "),a("code",[e._v("kubectl top")]),e._v(", you might have noticed a similar pattern used for both commands.")]),e._v(" "),a("p",[e._v("Kubectl offers a consistent API where the same command (ie, "),a("code",[e._v("kubectl top")]),e._v(") can be used with different object types (ie, "),a("code",[e._v("pod")]),e._v(" and "),a("code",[e._v("node")]),e._v("). As you continue through the tutorial and get familiar with other kubectl commands, you will appreciate the consistency this brings! It really makes easier to get comfortable with using the "),a("code",[e._v("kubectl")]),e._v(" CLI.")])]),e._v(" "),a("p",[e._v("We have seen the easiest and most basic way to get the CPU and memory stats, which is great. But what do these figures "),a("em",[e._v("actually mean")]),e._v("?")]),e._v(" "),a("ul",[a("li",[e._v("The easiest one is the memory. Since it says (bytes) in the output, you might have correctly guessed 6Mi equals 6 mega bytes")]),e._v(" "),a("li",[e._v("What about CPU then? It us measured in "),a("em",[e._v("milli cores")]),e._v(", meaning a 1000th of a single core of a CPU. So 2m equals 2 milli cores, or a 2/1000 of one of your CPU cores. See the "),a("a",{attrs:{href:"https://kubernetes.io/docs/tasks/configure-pod-container/assign-cpu-resource/#cpu-units",target:"_blank",rel:"noopener noreferrer"}},[e._v("official docs"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("h2",{attrs:{id:"enabling-the-dashboard"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enabling-the-dashboard"}},[e._v("#")]),e._v(" Enabling the dashboard")]),e._v(" "),a("p",[e._v("We will finish this first section by enabling the "),a("a",{attrs:{href:"https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kubernetes Dashboard"),a("OutboundLink")],1),e._v(" in our minikube cluster. This will be a very helpful tool while learning and experimenting since it will let you explore and interact with your cluster from your browser.")]),e._v(" "),a("p",[e._v("Enable it with the following command:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ minikube addons "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("enable")]),e._v(" dashboard\n")])])]),a("p",[e._v("The command will deploy the necessary Kubernetes objects to host the dashboard application. You will for example see new Pods if you run again the "),a("code",[e._v("kubectl get pods --all-namespaces")]),e._v(" command.")]),e._v(" "),a("p",[e._v("Then open a second terminal and run")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ minikube dashboard\n")])])]),a("p",[e._v("A new browser tab will open with the dashboard! You can now inspect the cluster in the dashboard:\n"),a("img",{attrs:{src:t(351),alt:"Kubernetes dashboard"}})]),e._v(" "),a("p",[e._v("For example, find all the those "),a("code",[e._v("Pods")]),e._v(" listed with the previous "),a("code",[e._v("kubectl get")]),e._v(" command by:")]),e._v(" "),a("ol",[a("li",[e._v("Select the "),a("strong",[e._v("kube-system")]),e._v(" namespace in the dropdown available on the sidebar")]),e._v(" "),a("li",[e._v("Then select the Pods item of the sidebar.")])]),e._v(" "),a("p",[e._v("The output should display the same containers you saw in your command line:\n"),a("img",{attrs:{src:t(352),alt:"The kube-system pods in the dashboard"}})]),e._v(" "),a("p",[e._v("And this concludes the initial module of the tutorial.\nFeel free to explore further the dashboard, for example accessing the logs of one of those "),a("code",[e._v("Pods")]),e._v(", or viewing their properties. While it might not make complete sense, you will be able to connect the dots faster in the next module as we take a deeper look at basic objects such as "),a("code",[e._v("Pod")]),e._v(" or "),a("code",[e._v("Namespace")]),e._v(".")])])}),[],!1,null,null,null);s.default=r.exports}}]);