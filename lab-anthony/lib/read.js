'use strict';

const fs = require('fs');

module.exports = function(pathsArray, callback) {
  var dataArray = [];
  var count = 0;
  pathsArray.forEach(function(file, index){
    fs.readFile(file, (err, data) => {
      if (count === pathsArray.length) {
        return callback(dataArray);
      }
      if (err) throw err;
      dataArray[index] = data.toString('hex', 0, 8);
      count++;
    });
  });
};
