'use strict';

const getFiles = require(__dirname + '/lib/getFiles');
const files = ['one.txt', 'two.txt', 'three.txt'];

const filePaths = files.map(function(file) {
  return './data/' + file;
});

getFiles(filePaths, function(err, fd) {
  if (err) console.error(err);
  fd.forEach(function(val) {
    console.log(val);
  });
});
