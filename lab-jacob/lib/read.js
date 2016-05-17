'use strict';

const fs = require('fs');

// module for reading creating buffer data from data folder
module.exports = function(file, callback) {
  fs.readFile('./data/' + file, function(err, data) {
    if (err) throw err;
    callback(err, data);
  });
};
