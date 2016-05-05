'use strict';

const fs = require('fs');

const filePaths = [
  __dirname + '/../data/one.txt',
  __dirname + '/../data/two.txt',
  __dirname + '/../data/three.txt'
];

var result = [];
var count = 0;

var firstEight = function(){
  filePaths.forEach(function(path, index){
    fs.readFile(path, function(err, data){
      if (err) throw err;
      result[index] = data.toString('hex',0,8);
      count++;
      if (count === filePaths.length){
        console.log(result);
      }
    });
  });
};

firstEight();
module.exports = firstEight;
