'use strict';


'use strict';

const fs = require('fs');

const filePaths = [
  __dirname + '/data/first.txt',
  __dirname + '/data/second.txt',
  __dirname + '/data/third.txt'
];

var result = [];
var count = 0;

filePaths.forEach(function(path, index){
  fs.readFile(path, function(err, data){
    if (err) throw err;
    result[index] = data.toString('hex',0,8);
    // result[index] = data.toString('utf-8', 0, 8)
    count++;
    if (count === filePaths.length){
      console.log('result: ', result);
    }
  });
});
