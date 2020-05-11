---
layout: Post
sidebar: true
sidebarDepth: 0
date: 2019-06-05
tags:
  - Vue
  - Vue CLI
  - npm
  - Jest
  - Puppeteer
author: Daniel
location: Dublin, Ireland
summary: A plugin for the awesome Vue CLI that simplifies the setup needed to use Jest and Puppeteer to write and run E2E tests.
---
# vue-cli-plugin-jest-puppeteer

A plugin for the awesome [Vue CLI](https://cli.vuejs.org/) that simplifies the setup needed to use [Jest]https://jestjs.io/) and [Puppeteer](https://pptr.dev/) to write and run E2E tests.
::: tip
You can install from [npm](https://www.npmjs.com/package/vue-cli-plugin-jest-puppeteer) using the Vue CLI:
```bash
vue add jest-puppeteer
```
:::

The plugin will update your Vue application with the necessary plumbing to run E2E tests using [Jest](https://jestjs.io/) and [Puppeteer](https://pptr.dev/):
- Installs and configures both libraries and the necessary dependencies
- Adds a new command so you can run the tests using `npm run test:e2e`
- Adds a sample test.

Check it on GitHub:

[![kaizendorks/vue-cli-plugin-jest-puppeteer - GitHub](https://gh-card.dev/repos/kaizendorks/vue-cli-plugin-jest-puppeteer.svg?fullname=)](https://github.com/kaizendorks/vue-cli-plugin-jest-puppeteer)
