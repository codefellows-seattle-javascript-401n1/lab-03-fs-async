'use strict';

const readData = require(__dirname + '/lib/read');
const filePaths = [
  __dirname + '/data/one.txt',
  __dirname + '/data/two.txt',
  __dirname + '/data/three.txt'
];

var bufferedFiles = [];
var counter = 0;

filePaths.forEach(function(path, index){
  readData(path, function(data){
    const buf = new Buffer(data);
    const output = buf.toString('hex',0,8);
    bufferedFiles[index] = output;
    counter++;
    if (counter === filePaths.length) {
      console.log(bufferedFiles);
      return bufferedFiles;
    }
  });
});
