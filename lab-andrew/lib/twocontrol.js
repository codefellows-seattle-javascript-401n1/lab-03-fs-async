'use strict';

const fs = require('fs');

module.exports = function second(callback) {
  fs.readFile('./data/two.txt', function(err,data) {
    if (err) callback(err);
    callback(data.toString('hex', 0, 8));
  });
};
