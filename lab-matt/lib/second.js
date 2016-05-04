'use strict';

const fs = require('fs');


module.exports = function secondRun(callback){
  fs.readFile(__dirname + '/../data/second.txt', function(err, data){
    if(err){
      console.error(err);
      callback(null);
    } else {
      var secondText = data.toString('hex', 0, 8);
      callback(secondText);
    }
  });
};
