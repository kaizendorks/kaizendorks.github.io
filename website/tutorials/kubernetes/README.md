---
layout: Post
sidebar: true
date: 2020-04-03
tags:
  - Kubernetes
  - tutorial
author: Daniel
location: Dublin, Ireland
---

# Kubernetes tutorial

## Why another tutorial?

Getting started with [Kubernetes](https://kubernetes.io/) is not easy, there is quite a learning curve before most people feel comfortable interacting and/or managing their cluster.

The tutorial is aimed at developers with no previous experience of Kubernetes, however it assumes some basic knowledge of [docker/containers](https://www.docker.com/), networking and web applications.

This is adapted from the official tutorials found in the [Kubernetes documentation](https://kubernetes.io/docs/tutorials/) and the [katacoda](https://www.katacoda.com/) online courses.

## Following the tutorial

Through the tutorial you will see plenty of code blocks showcasing commands you are meant to execute in your own terminal, for example:
```bash{1}
$ kubectl get nodes
NAME       STATUS   ROLES    AGE   VERSION
minikube   Ready    master   37m   v1.18.0
```
The line that starts with `$` contains the command you are meant to execute, such as `kubectl get nodes` and the rest is the sample output.

- Sometimes you will see multiple commands in the same block. Each will begin with the `$` prompt.
- Some of the command output like IPs will most likely be different in your local machine

## Local environment setup

The very first thing we will need to do is to setup our machine with the necessary tools to follow along the tutorial.

- We will create our own personal Kubernetes cluster using [minikube](https://github.com/kubernetes/minikube). This is an official Kubernetes tool for learning, experimenting and prototyping that creates a single node Kubernetes cluster in your local machine.
- We will use [kubectl](https://kubernetes.io/docs/reference/kubectl/overview/), the official Kubernetes CLI tool, in order to interact with the cluster
- You will run lots of commands in a terminal, so make sure you have a good terminal installed!

The Kubernetes official documentation has step by step instruction on how to get your local learning environment setup regardless of your OS: [https://kubernetes.io/docs/setup/learning-environment/minikube/](https://kubernetes.io/docs/setup/learning-environment/minikube/).

Let us add some additional advice:

- We recommend using package managers such as [Homebrew](https://brew.sh/) (Mac) and [Chocolatey](https://chocolatey.org/) (Win) as the easiest setup, but you have more options in the full official instructions linked above.
- You can also try to follow through the tutorial using the [Katacoda](https://www.katacoda.com/) **online environment**. This will let you follow without having to locally install kubectl and minikube, directly interacting with the cluster through the website. However, you might experience **some limitations/differences** that we will try to point out during the tutorial.

::: tip
Do you already have a local cluster using a different way than minikube? Thats fine, as long as you have your own local cluster you can play with, you will be able to follow along.
:::

### Installation in Mac using Homebrew
```bash
$ brew install kubectl
$ brew install minikube
```

### Installation in Windows using Chocolatey
```bash
$ choco install kubernetes-cli
$ choco install minikube
```

### Follow online using Katacoda

Complete the following online Katacode tutorial where you will deploy a Kubernetes cluster using minikube: [https://www.katacoda.com/courses/kubernetes/launch-single-node-cluster](https://www.katacoda.com/courses/kubernetes/launch-single-node-cluster)

Make sure you don't close the window once you reach the end of the tutorial, you will use it to follow along the rest of our tutorial.

::: warning
Katacode online environments expire after minutes without activity. If this happens you will need to complete again the steps in the Katacoda tutorial plus any steps of this tutorial to go back to the point you were
:::
