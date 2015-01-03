module.exports = function (fn, targetIndex) {
  return function (first) {
    if (typeof targetIndex !== 'number') return fn(first);
    return fn(arguments[targetIndex]);
  };
};
