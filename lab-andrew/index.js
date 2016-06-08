'use strict';

const readFiles = require(__dirname + '/lib/readFiles');
var paths = ['/data/one.txt', '/data/two.txt', '/data/three.txt'];

readFiles(paths, function(data) {
  console.log(data);
});
