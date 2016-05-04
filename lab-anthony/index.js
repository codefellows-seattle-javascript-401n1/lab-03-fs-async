'use strict';

const fs = require('fs');

const filesArray = [
  __dirname + '/data/first.txt',
  __dirname + '/data/second.txt',
  __dirname + '/data/third.txt'
];

var sortedArray = [];

filesArray.forEach(function(file, index){
  fs.readFile(file, (err, data) => {
    if (err) throw err;
    sortedArray[index] = data.toString('utf8', 0, 8);

    if (filesArray.length === sortedArray.length)
      sortedArray.forEach(function(hexdata){
        console.log(hexdata);
      });
  });
});
