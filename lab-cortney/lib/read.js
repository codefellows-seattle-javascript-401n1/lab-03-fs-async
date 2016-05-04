'use strict';

const fs = require('fs');

module.exports = function(file, callback) {
  fs.readFile(file, function(err, data) {
    if (err) {
      return console.error(err);
    }
    return callback(data);
  });
};
