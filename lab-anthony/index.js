'use strict';

const read = require('./lib/read');

const pathsArray = [
  __dirname + '/data/first.txt',
  __dirname + '/data/second.txt',
  __dirname + '/data/third.txt'
];

read(pathsArray);
