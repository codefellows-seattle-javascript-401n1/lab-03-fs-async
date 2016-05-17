'use strict';

const read = require(__dirname + '/lib/read');
const files = ['one.txt', 'two.txt', 'three.txt'];
exports.files = files; // puts file extensions on the exports module for use in tests

var results = []; // array where hex data will be placed after buffereing
var count = 0;    // count variable, causes results to be loged after all buffer data has been placed in results

files.forEach(function(path, index) { // goes through each file, runs the read modules and places the data into results array
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
