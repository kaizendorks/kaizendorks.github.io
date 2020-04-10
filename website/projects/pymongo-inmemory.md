---
layout: Post
sidebar: true
sidebarDepth: 0
date: 2019-07-26
tags:
  - Python
  - PyPI
  - MongoDB
author: Ertuğrul
location: Dublin, Ireland
summary: A Python library that provides an in-memory MongoDB server that can be used during integration tests.
---
# pymongo_inmemory
[![PyPI version](https://badge.fury.io/py/pymongo-inmemory.svg)](https://badge.fury.io/py/pymongo-inmemory)

A Python library that provides an in-memory MongoDB server that can be used during integration tests.
 ::: tip
You can install it from [PyPI](https://pypi.org/project/pymongo-inmemory/0.1.0/)
```bash
pip install pymongo-inmemory
```
:::

Rather that providing a stub of the database, pymongo_inmemory uses a real MongoDB server configured to use in memory storage. This lets you easily manage the database during integration tests, including CI environments. It downloads the mongo binary from the official MongoDB servers and starts a `mongod` process that is kept alive during the test.

You have control over which exact MongoDB version is downloaded, so you can be sure you use the same version during your tests that during production.

:::tip
Have you written similar tests in Node.js? You might have come across libraries such as [mongodb-memory-server](https://github.com/nodkz/mongodb-memory-server) or [mockgo](https://github.com/seriousManual/mockgo) which inspired pymongo_inmemory!
:::

Check it on GitHub:

[![kaizendorks/pymongo_inmemory - GitHub](https://gh-card.dev/repos/kaizendorks/pymongo_inmemory.svg?fullname=)](https://github.com/kaizendorks/pymongo_inmemory)