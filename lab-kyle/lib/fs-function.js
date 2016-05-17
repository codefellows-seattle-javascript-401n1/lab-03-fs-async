'use strict';

const fs = require('fs');

exports.bufferfiles = function(textfile, callback) {
  fs.readFile(textfile, (err, data) => {
    if (err) {
      console.err;
      callback(err, null);
      return;
    }
    callback(null, data);
  });
};
