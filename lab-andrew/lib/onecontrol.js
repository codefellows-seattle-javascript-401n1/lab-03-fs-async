'use strict';


const fs = require('fs');
module.exports = function first(callback) {
  fs.readFile('./data/one.txt', function(err,data) {
    if (err) callback(err);
    callback(data.toString('hex', 0, 8));
  });
};
