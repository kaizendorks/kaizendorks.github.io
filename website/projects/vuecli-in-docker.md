---
layout: Post
sidebar: true
sidebarDepth: 0
date: 2019-11-23
tags:
  - Vue
  - Vue CLI
  - npm
  - Docker
  - Docker Hub
author: Ruben
location: Dublin, Ireland
summary: A Docker image wrapping the Vue CLI so you can use it without the need to install locally using npm/yarn.
---
# vuecli-in-docker
[![Build Status](https://travis-ci.org/kaizendorks/vuecli-in-docker.svg?branch=master)](https://travis-ci.org/kaizendorks/vuecli-in-docker)

A [Docker](https://www.docker.com/get-started) image wrapping the [Vue CLI](https://cli.vuejs.org/) so you can use it without the need to install locally using npm/yarn.
::: tip
You can pull the image from [Docker Hub](https://hub.docker.com/r/kaizendorks/vue):
```bash
docker pull kaizendorks/vue
```
:::

It simply provides a Node image where the Vue CLI has been installed. This lets you use a container to run any of the CLI commands, by mounting your local folder as a volume.

For example, you can generate a new project inside your current folder using the following command:
```bash
docker run --rm -it \
  -v "$(pwd)":/src \
kaizendorks/vue vue create my-app
```
Now there is a /myapp folder inside your current local folder
```bash
cd my-app
ls
# profit!
```

:::tip
If you find the command very verbose, create an alias for your favourite shell
:::

Check it on GitHub:

[![kaizendorks/vuecli-in-docker - GitHub](https://gh-card.dev/repos/kaizendorks/vuecli-in-docker.svg?fullname=)](https://github.com/kaizendorks/vuecli-in-docker)
