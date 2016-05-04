'use strict';
const fs = require('fs');
exports.buffer = function(textfile, callback) {
  fs.readFile(textfile, (err, data) => {
    if (err) {
      console.err(err);
      callback(err, null);
      return;
    }
    callback(null, data);
  });
};
