'use strict';

var but = require('./');
var n = [1, 2, 3, 4, 5];
var m = ['1a', '2a', '3a', '4a', '5a'];

n.forEach(console.log);

n.forEach(but(console.log));

m.map(parseInt).forEach(but(console.log));

m.map(but(parseInt)).forEach(but(console.log));
