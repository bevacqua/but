'use strict';

var assert = require('assert');
var but = require('./');
var n = [1, 2, 3, 4, 5];
var s = ['a', 'b', 'c', 'd', 'e'];

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

describe('a targeted callback', function() {
  it('fails with normal but', function() {
    var nMappedAwesome = s.map(but(parseInt));
    assert(isNaN(nMappedAwesome.pop()));
  });

  it('is amazing with targeted but', function() {
    var nMappedAwesome = s.map(but(parseInt, 1));
    var item = nMappedAwesome.shift();
    assert(!isNaN(item));
    assert(item === 0);
  });
});
