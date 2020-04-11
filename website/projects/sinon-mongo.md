---
layout: Post
sidebar: true
sidebarDepth: 0
date: 2019-01-30
tags:
  - Node
  - npm
  - MongoDB
author: Daniel
location: Dublin, Ireland
summary: A Node library that simplifies writing unit tests using sinon for mocking code using the MongoDB client.
---
# sinon-mongo

A Node library that simplifies writing unit tests using [sinon](https://sinonjs.org/) for mocking code using the [MongoDB client](https://mongodb.github.io/node-mongodb-native/).
::: tip
You can install it from [npm](https://www.npmjs.com/package/sinon-mongo)
```bash
npm install sinon-mongo
```
:::

Let's see the most basic example. Imagine you have a function that depends on `db`, an instance of the MongoDB client:
```js
findCustomersInOrganization(orgName){
  return db
    .collection('customers')
    .find({ orgName })
    .toArray();
}
```

You can create a sinon stub for the `db` object as in:
```js
mockCustomerCollection = sinon.mongo.collection();
mockDb = sinon.mongo.db({
  customers: mockCustomerCollection
});
```

And test the method as in:
```js
it('returns all the customers for the given org name', () => {
  const mockCustomers = [{a: 'mock customer'}, {another: 'mock customer'}];
  mockCustomerCollection.find
    .withArgs({ orgName: 'mockOrgName' })
    .returns(sinon.mongo.documentArray(mockCustomers));

  return repository.findCustomersInOrganization('mockOrgName').then(customers => {
    expect(customers).to.be.eql(mockCustomers);
  });
});
```

See the [documentation](https://github.com/DaniJG/sinon-mongo) for the full API and additional examples.

Check it on GitHub:

[![DaniJG/sinon-mongo - GitHub](https://gh-card.dev/repos/danijg/sinon-mongo.svg?fullname=)](https://github.com/danijg/sinon-mongo)
