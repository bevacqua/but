# but [![Build Status][1]][2]

**But expands your functional horizons to the edge of the universe**

> If only there was a way to pass along a callback with just a single argument.

You know how you like chaining asynchronous function calls **but** sometimes weird arguments get in the way of your waterfall series with unpredictable arguments?

How about attempting to `parseInt` in a `map` only to find out `map` spews three arguments?

# NO MORE!

```shell
npm install but --save
```

# Usage

Functional arguments giving you headaches?

##### Before

```js
n.map(function (val) {
  return parseInt(val);
});
```

##### After

```js
n.map(but(parseInt));
```

Works on `.forEach` or any functional array method as well! Classy.

##### Before

```js
n.forEach(function (val) {
  console.log(val);
});
```

##### After

```js
n.forEach(but(console.log.bind(console))); // you can omit bind on node.js
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

  [1]: https://travis-ci.org/bevacqua/but.png?branch=master
  [2]: https://travis-ci.org/bevacqua/but
