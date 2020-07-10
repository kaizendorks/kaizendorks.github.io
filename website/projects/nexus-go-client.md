---
layout: Post
sidebar: true
sidebarDepth: 0
date: 2020-07-10
tags:
  - Nexus
  - Golang
author: Ruben Vasconcelos
location: Dublin, Ireland
summary: A minimal Golang client for interacting with the Nexus Repository APIs.
---
# nexus-go-client

::: warning
Initial version ready for use but still in development (AKA missing some APIs)!
:::

A minimal GO client for interacting with the nexus [Nexus Repository API](https://help.sonatype.com/repomanager3/rest-and-integration-api)

The Nexus APIs seem to still be in their infancy but evolving at a fast pace, this has caused some of the existing libraries to fall behind.

We decided to avoid doing anything fancy for stuff like re-using code because many of the existing Nexus APIs might become obsolete relatively soon. Unlike some of the existing libraries, this client does not implement any extra logic other than the one supported by the official Nexus API (its more like a proxy for passing things back and forward), leaving it up to the users to handle advanced logic.

This approach reduces the amount of code that is not under the user's control, in addition to making this library easier to maintain and keep in sync with the Nexus APIs.

And it is also an excuse to learn a bit of [Go](https://golang.org/) 😎

It is early days! If you are interested or would like to contribute, check the progress on GitHub:
[![kaizendorks/nexus-go-client - GitHub](https://gh-card.dev/repos/kaizendorks/nexus-go-client.svg?fullname=)](https://github.com/kaizendorks/nexus-go-client)
