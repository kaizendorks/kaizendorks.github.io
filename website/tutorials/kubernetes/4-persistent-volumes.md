---
layout: Post
sidebar: true
date: 2021-02-07
tags:
  - Kubernetes
  - tutorial
author: Daniel
location: Dublin, Ireland
---

# Persistent Volumes

So far in the tutorial, we have been using stateless applications and services. Even when we used a stateful application like Kibana, any changes you made would be gone as soon as the Pod is redeployed.
This makes sense, after all a Pod is a group of containers which are stateless by nature, ie any changes made to their files systems are lost if you redeploy the container.

To solve this problem, container technologies like Docker implement the concept of volumes, the ability to mount an external folder into the container file system. It should be no surprise that Kubernetes implements a similar idea through [Persistent Volumes](https://kubernetes.io/docs/concepts/storage/persistent-volumes/).

- A **Persistent Volume** is the Kubernetes object that abstracts away the notion of an external volume that can later be used (or mounted) by a Pod. Note most folks refer to these as simply _volumes_.
- Kubernetes volumes can be implemented in multiple ways such as folders in the cluster hosts, AWS EBS, Azure Disks and many others.
- Pods dont use Persistent Volumes directly, instead a Pod is associated to a **Persistent Volume Claim**. A claim is the way for a Pod to declare the storage it needs, leaving it for Kubernetes and its storage plugins to figure out what specific volume and storage type should be used. Note that similarly many folks would refer to these as _volume claims_.

If this sounds confusing, don't worry! It will become more clear with a few examples.

::: tip
We will use **MongoDB** through the article. However, the information equally applies when hosting in Kubernetes any kind of stateful application, be it some database or simply an application that needs to persist some data.
:::

## The need for volumes. Losing data when redeploying

## Using Volumes with stateful applications

### Using a localHost volume with MongoDB

### Using a StatefulSet and volumes with MongoDB

### The special case of emptyDir volumes

https://kubernetes.io/docs/tasks/configure-pod-container/configure-volume-storage/

https://dev.to/techworld_with_nana/difference-between-emptydir-and-hostpath-volume-types-in-kubernetes-286g

## Beyond localhost volumes

Cloud providers: AWS, Azure, Portworx, etc

<tutorial-call-to-action-link title="Prev module" to="./3-basic-networking" />
<tutorial-call-to-action-link title="Next module" to="./5-helm-charts" />