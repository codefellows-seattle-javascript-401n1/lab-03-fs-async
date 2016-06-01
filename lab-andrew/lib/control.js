'use strict';

const fs = require('fs');

module.exports = function readFile(callback) {
  fs.readFile(__dirname + '/../data/two.txt', function(err, data) {
    if (err) {
      console.error(err);
      callback(null);
    } else {
      var controlText = data.toString('hex', 0, 8);
      callback(controlText);
    }
  });
};
