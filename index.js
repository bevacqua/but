module.exports = function (fn) {
  return function (first) {
  	fn(first);
  };
};
