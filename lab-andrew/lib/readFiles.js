'use strict';

const fs = require('fs');

var counter = 0;
var dataArr = [];

module.exports = function(files, callback) {
  for (let i=0; i<files.length; i++) {
    handleData(files[i], i, files.length, callback);
  }
};

function readFile(file, index, callback) {
  fs.readFile(__dirname + '/../' + file, function(err, data) {
    if (err) {
      console.error(err);
      callback(null);
    } else {
      var controlText = data.toString('hex', 0, 8);
      callback(controlText, index);
    }
  });
}

function handleData(file, i, numberOfFiles, callback) {
  readFile(file, i, function(data, index) {
    dataArr[index] = data;
    counter++;
    if (controlData(numberOfFiles)) {
      callback(dataArr);
    }
  });
}

function controlData(numberOfFiles) {
  if (counter === numberOfFiles) {
    return  true;
  }
  return false;
}
