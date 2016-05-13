'use strict';
const fs = require('fs');

exports.readFiles = function(files, cb){
  let firstEightBytes = [];
  function readFileInOrder(index, callback){
    if (index === files.length) {
      callback(null, firstEightBytes);
    } else {
      fs.readFile(files[index], (err, data) => {
        if (err) return callback(err);
        firstEightBytes.push(data.toString('hex', 0, 8));
        readFileInOrder(index + 1, callback);
      });
    }
  }

  readFileInOrder(0, cb); //always start at 0 index
};
