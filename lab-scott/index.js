'use strict';

const getFiles = require(__dirname + '/lib/getFiles');
const fs = require('fs');

const filePaths = fs.readdir('./data/', function(err, files) {
  files.map(function(val) {
    return './data/' + val;
  });
});

getFiles(filePaths, function(err, fd) {
  if (err) console.error(err);
  fd.forEach(function(val) {
    console.log(val);
  });
});
