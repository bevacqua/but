# but

> If only there was a way to pass along a callback with just a single argument.

You know how you like chaining asynchronous function calls **but** sometimes weird arguments get in the way of your waterfall series with unpredictable arguments?

How about attempting to `parseInt` in a `forEach` only to find out `forEach` spews three arguments?

# NO MORE!

```shell
npm install but --save
```

# Usage

Functional arguments giving you headaches?

##### Before

```js
n.forEach(function (val) {
  console.log(val);
});
```

##### After

```js
n.forEach(but(console.log));
```

Mongoose being weird?

##### Before

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

##### After

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
