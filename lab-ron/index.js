'use strict';

const fs = require('fs');

const filePaths = [
  __dirname + '/data/first.txt',
  __dirname + '/data/second.txt',
  __dirname + '/data/third.txt'
];

var result = [];
var count = 0;

exports.index = function(callback){


  filePaths.forEach((path, index) => {

    fs.readFile(path, (err, data) =>{
      if (err) throw err;
      result[index] = data.toString('hex',0,8);
    // result[index] = data.toString('utf-8', 0, 8)
      count++;
      if (count === filePaths.length){
        return callback(result);
      }
    });
  });
};
