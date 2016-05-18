'use strict';

const read = require('./lib/read');

const pathsArray = [
  __dirname + '/data/first.txt',
  __dirname + '/data/second.txt',
  __dirname + '/data/third.txt'
];

read(pathsArray, function(dataArray) {
  console.log(dataArray);
});

// var dataArray = [];
// var count = 0;
//
// pathsArray.forEach(function(path, index) {
//   read(path, function(err, data) {
//     if (err) throw err;
//     dataArray[index] = data.toString('hex', 0, 8);
//     count++;
//     if (count === pathsArray.length) {
//       console.log(dataArray);
//     }
//   });
// });
