'use strict';
const fs = require('fs');


module.exports = function third(callback) {
  fs.readFile('./data/three.txt', function(err,data) {
    if (err) callback(err);
    callback(data.toString('hex', 0, 8));
  });
};
