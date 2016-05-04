'use strict';

const fs = require('fs');


module.exports = function firstRun(callback){
  fs.readFile(__dirname + '/../data/first.txt', function(err, data){
    if(err){
      console.error(err);
      callback(null);
    } else {
      var firstText = data.toString('hex', 0, 8);
      callback(firstText);
    }
  });
};
