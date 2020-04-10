---
layout: Post
sidebar: true
sidebarDepth: 0
date: 2019-04-13
tags:
  - Vue
  - Vue CLI
  - npm
  - Auth0
author: Ruben
location: Dublin, Ireland
summary: A plugin for the awesome Vue CLI that simplifies the setup needed to use Auth0 as your authentication and authorization provider.
---
# vue-cli-plugin-auth0
[![Build Status](https://travis-ci.org/kaizendorks/vue-cli-plugin-auth0.svg?branch=master)](https://travis-ci.org/kaizendorks/vue-cli-plugin-auth0)

A plugin for the awesome [Vue CLI](https://cli.vuejs.org/) that simplifies the setup needed to use [Auth0](https://auth0.com/) as your authentication and authorization provider.
::: tip
You can install from [npm](https://www.npmjs.com/package/vue-cli-plugin-auth0) using the Vue CLI:
```bash
vue add auth0
```
:::

The plugin will update your Vue application in order to wire the [@auth0/auth0-spa-js](https://auth0.com/docs/libraries/auth0-spa-js) client library. In addition to that:
- Generates a JSON file with the necesary auth0 configuration
- Extends the Vue instance with methods to handle the login/logout workflow
- Updates the main App.vue component with a sample widget that lets users login/logout and see the current user profile.

If it detects that [vue-router](https://router.vuejs.org/) is installed, it will update the router with a guard that prevents a page from being accessible to anonymous users, as well as an example page using the guard!

Check it on GitHub:

[![kaizendorks/vue-cli-plugin-auth0 - GitHub](https://gh-card.dev/repos/kaizendorks/vue-cli-plugin-auth0.svg?fullname=)](https://github.com/kaizendorks/vue-cli-plugin-auth0)
