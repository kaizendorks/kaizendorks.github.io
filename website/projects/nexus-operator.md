---
layout: Post
sidebar: true
sidebarDepth: 0
date: 2020-03-22
tags:
  - Kubernetes
  - Nexus
author: Ruben
location: Dublin, Ireland
summary: A Kubernetes operator that will be able to automatically configure Nexus as a Docker registry in a Kubernetes cluster.
---
# nexus-operator

::: warning
Still in development!
:::

A [Kubernetes operator](https://kubernetes.io/docs/concepts/extend-kubernetes/operator/) that will be able to automatically configure [Nexus](https://www.sonatype.com/product-nexus-repository) as a Docker registry in a Kubernetes cluster.

The goal is to use [CRD](https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/)(Custom resource definitions) in Kubernetes to both:
- setup Nexus with the necessary content selectors, privileges, roles and users
- register Nexus as a registry in the cluster, including the necessary credentials

And it is also an excuse to learn a bit of [Go](https://golang.org/) 😎

It is early days! If you are interested, check the progress on GitHub:

[![kaizendorks/nexus-operator - GitHub](https://gh-card.dev/repos/kaizendorks/nexus-operator.svg?fullname=)](https://github.com/kaizendorks/nexus-operator)
