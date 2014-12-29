'use strict';

var but = require('./');
var n = [1, 2, 3, 4, 5];

n.forEach(console.log);

n.forEach(but(console.log));
