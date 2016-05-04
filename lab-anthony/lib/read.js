'use strict';

const fs = require('fs');

module.exports = function(pathsArray) {
  var dataArray = [];
  pathsArray.forEach(function(file, index){
    fs.readFile(file, (err, data) => {
      if (err) throw err;
      dataArray[index] = data.toString('hex', 0, 8);

      if (pathsArray.length === dataArray.length)
        dataArray.forEach(function(hexdata){
          console.log(hexdata);
        });
    });
  });
};
