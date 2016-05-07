'use strict';

const read = require(__dirname + '/lib/read');
const files = ['one.txt', 'two.txt', 'three.txt'];
exports.files = files;

var results = [];
var count = 0;

files.forEach(function(path, index) {
  read(path, function(err, data) {
    if (err) {
      console.error('broken');
      return;
    }
    results[index] = data.toString('hex', 0, 8);
    count++;
    if (count === files.length) {
      console.log(results);
    }
  });
});
