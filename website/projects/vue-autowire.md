---
layout: Post
sidebar: true
sidebarDepth: 0
date: 2019-04-03
tags:
  - Vue
  - npm
author: Daniel, Ertuğrul
location: Dublin, Ireland
summary: A library for Vue that lets you automatically register components, views, routes, and other Vue elements.
---
# vue-autowire
[![Build Status](https://travis-ci.com/kaizendorks/vue-autowire.svg?branch=master)](https://travis-ci.com/kaizendorks/vue-autowire)

A library for Vue that lets you automatically register components, views, routes, and other Vue elements.
::: tip
You can install it from [npm](https://www.npmjs.com/package/vue-autowire)
```bash
npm install vue-autowire
```
See the official documentation at [https://kaizendorks.github.io/vue-autowire/](https://kaizendorks.github.io/vue-autowire/)
:::

Let's see the most basic example, focused on **components**. Where you would manually import a component as in:
```js
import MyComponent from '@/components/MyComponent'
export default {
  components: { MyComponent },
  ...
}
```

You can just install vue-autowire and automatically register all the global components inside the components folder
```js
import defaultConventions from 'vue-autowire/src/conventions'

Vue.use(VueAutowire, defaultConventions)
```

While handy, that would be limited!
- You can also easily register components as async components by using the `*.async.vue` file name pattern.
- You can ignore any component you don't want globally registered by using the `*.local.vue` file name pattern.
- If you prefer different file/folder name conventions, you can use your own instead of the default ones.

The library handles in a very similar way other Vue elements. At the moment it can auto register: **components, views, routes, directives and mixins**.

Check it on GitHub:

[![kaizendorks/vue-autowire - GitHub](https://gh-card.dev/repos/kaizendorks/vue-autowire.svg?fullname=)](https://github.com/kaizendorks/vue-autowire)
