'use strict';

const fs = require('fs');

module.exports = function(filePaths, callback) {
  let bytes = [];
  function asyncFiles(idx, cb) {
    if (idx !== filePaths.length) {
      fs.readFile(filePaths[idx], function(err, fd) {
        if (err) cb(err);
        bytes.push(fd.toString('hex', 0, 8));
        asyncFiles(idx+1, cb);
      });
    } else {
      cb(null, bytes);
    }
  }
  asyncFiles(0, callback);
};
