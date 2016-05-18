'use strict';

const fs = require('fs');

module.exports = function(pathsArray, callback) {
  var dataArray = [];
  var count = 0;
  pathsArray.forEach(function(file, index){
    fs.readFile(file, (err, data) => {
      if (err) throw err;
      dataArray[index] = data.toString('hex', 0, 8);
      count++;
      if (count === pathsArray.length) {
        callback(dataArray);
      }
    });
  });
};


// exports.read = function(path, cb) {
//   fs.readFile(path, function(err, data) {
//     if (err) throw err;
//     cb(err, data);
//   });
// };
