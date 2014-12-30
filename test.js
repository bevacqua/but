'use strict';

var assert = require('assert');
var but = require('./');
var n = [1, 2, 3, 4, 5];

describe('a plain callback', function() {
  var nMappedPlain = n.map(parseInt);
  it('is terrible', function() {
    assert(isNaN(nMappedPlain.pop()));
  })
});

describe('a but callback', function() {
  it('is awesome', function() {
    var nMappedAwesome = n.map(but(parseInt));
    assert(!isNaN(nMappedAwesome.pop()));
  })
});
