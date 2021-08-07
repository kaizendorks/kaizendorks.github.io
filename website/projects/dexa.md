---
layout: Post
sidebar: true
sidebarDepth: 0
date: 2021-08-07
tags:
  - Node
  - templating
  - scaffolding
  - npm
  - cli
author: Daniel
location: Dublin, Ireland
summary: A CLI tool that allows developers and teams to capture their preferred tech stacks as a project template and a set of code generators.
---
# dexa

A CLI tool that allows developers and teams to capture their preferred tech stacks as a project template and a set of code generators.

Each of these stacks is captured as a git repository. Create them in a publicly available service such as Github to encourage usage and sharing across the wider community. But you are also free to use dexa with private repositories.

::: tip
You can install it from [npm](https://www.npmjs.com/package/dexa)
```bash
npm install -g dexa
```
See the official documentation at [https://github.com/kaizendorks/dexa#readme](https://github.com/kaizendorks/dexa#readme)
:::

## How can dexa help you?

Imagine you work in a team that frequently creates web applications with Vue3 and fastify. Over time you will develop an opinionated way of setting these up, which you can capture as a project template in a git repo. With dexa you can `dx stack add` your repo as a _stack_, so you can later create projects with `dx init my-vue-fastify-template`.

You might sometimes use docker, you can then expand your stack repo with another template that adds docker and compose files so you can `dx add docker`. In some projects you might use postgre while in others you might use mongoDB, you can then capture 2 further templates that allow you to `dx add postgre` or `dx add mongo` to your project.

You will likely find yourself regularly creating elements like pages or apis when creating these applications. Dexa can also help you by expanding your _stack_ with template generators so you can `dx generate page new-page` or `dx generate api new-api`!

In summary, you can capture your _stack_ as a git repository structured as a project template and optionally additional code generators, following a structure like:
```
/stack-root
|__ /init
|   |__ fileA // can be any extension (and copied as is) or `.hbs` (a handlebars dynamic template)
|   |__ /some/folder/fileB
|   |__ ... more template files and folders
|__ /add
|   |__ /docker
|   |   |__ ... template files. They are copied/generated as if this was the project root
|   |__ /postgre
|   |   |__ ...
|   |__ /mongo
|       |__ ...
|__ /generate
|   |__ /api
|   |   |__ ...
|   |__ /page
|       |__ ...
|__ dexa.js // optional file, defines additional metadata/options/arguments for each template
```

Once the stack is defined in a git repo:
- Install the stack using `dx stack add` as in
    ```sh
    dx stack add git@github.com:DaniJG/my-stack.git
    ```
- Create new projects using the stack as the project template with the `dx init` command, as in
    ```sh
    dx init my-stack my-project
    # project generated in ./my-project !
    ```
- Add features to a generated project with the `dx add` commands, as in
    ```sh
    dx add docker
    # dockerfile and compose files added to the project!
    ```
- Generate code with the `dx generate` commands, as in
    ```sh
    dx generate page my-new-page
    # new Vue components and route added to the project!
    ```

## Is it limited to JavaScript projects?

Absolutely not! While dexa is written in JavaScript, you can define stack templates for any language. In a nutshell, dexa will render the templates you define, what those templates contain is entirely up to you.

For example, you could create a terraform stack so you can `dx init terraform`. This stack could define features such as S3 or azure blob remote storage so you can `dx add remote-aws-s3` or `dx add remote-azure-blob`. In a similar fashion, you could then create generators for any common terraform modules you typically use, allowing you to `dx generate s3-bucket` or `dx generate aws-kubernetes`.

## Can I use a project template without generators?

You can define a stack by pointing to a repo that contains just a project template like this [vue-vite-tailwind](https://github.com/web2033/vite-vue3-tailwind-starter) starter
```
dx stack add vue-vite https://github.com/web2033/vite-vue3-tailwind-starter
```

You will be able to create new projects using that template as in `dx init vue-vite`, but here will be no `dx add` or `dx generate` commands available for those generated projects.

This is similar to using [degit](https://github.com/Rich-Harris/degit), except you can keep track of these templates as dexa stacks.

## Source

Check it on GitHub:

[![kaizendorks/dexa - GitHub](https://gh-card.dev/repos/kaizendorks/dexa.svg?fullname=)](https://github.com/kaizendorks/dexa)
