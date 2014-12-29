module.exports = function (fn) {
  return function (err) {
  	fn(err);
  };
};
