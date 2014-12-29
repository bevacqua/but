# but

> If only there was a way to pass along a callback with just a single argument.

You know how you like chaining asynchronous function calls **but** sometimes weird arguments get in the way of your waterfall series with unpredictable arguments?

# NO MORE!

```shell
npm install but --save
```

# Before

```js
async.waterfall([
  function (next) {
    new User(model).save(function (err) {
      next(err);
    });
  },
  function (next) {
    // MOAR CODE
  }
])
```

# After

```js
async.waterfall([
  function (next) {
    new User(model).save(but(next));
  },
  function (next) {
    // MOAR CODE
  }
])
```

# Why?

It had to be done. It is known.

# License

MIT
