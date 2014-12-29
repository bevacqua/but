module.exports = function (fn) {
  return function (first) {
    return fn(first);
  };
};
