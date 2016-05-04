'use strict';

module.exports = function(){
  const fs = require('fs');
  const filePaths = [
    __dirname + '/../data/one.txt',
    __dirname + '/../data/two.txt',
    __dirname + '/../data/three.txt'
  ];

  var results = [];
  var count = 0;

  filePaths.forEach(function(path, index){
    fs.readFile(path, function(err, data){
      if(err) throw err;
      // results[index] = data.slice(0, 8).toString('utf8');
      results[index] = data.slice(0, 8).toString('hex');
      count ++;
      if (count === filePaths.length) {
        console.log('results: ', results);
      }
    });
  });
  return 'I hate this class!';
};
