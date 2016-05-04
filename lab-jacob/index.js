'use strict';

const read = require(__dirname + '/lib/read');
const files = ['one.txt', 'two.txt', 'three.txt'];

var results = [];
var count = 0;

files.forEach(function(path, index) {
  read(path, function(err, data) {
    if (err) {
      console.error('broken');
      return;
    }
    console.log(data.toString('hex', 0, 7));
    results[index] = data.toString('hex', 0, 7);
    count++;
    if (count === files.length) {
      console.log(results);
      console.log(count);
    }
  });
});
