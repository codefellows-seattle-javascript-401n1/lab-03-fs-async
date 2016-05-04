'use strict';

const fs = require('fs');


module.exports = function thirdRun(callback){
  fs.readFile(__dirname + '/../data/third.txt', function(err, data){
    if(err){
      console.error(err);
      callback(null);
    } else {
      var thirdText = data.toString('hex', 0, 8);
      callback(thirdText);
    }
  });
};
