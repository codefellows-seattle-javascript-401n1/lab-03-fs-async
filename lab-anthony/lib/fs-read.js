'use strict';

const fs = require('fs');

exports.fsFun = function(file, cb) {
  fs.readFile(file, function(err, data){
    if(err) {
      console.log(err);
      cb(err, null);
    }
    cb(null, data);
  });
};
