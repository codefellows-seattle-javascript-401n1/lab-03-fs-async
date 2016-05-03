//read first file//
//need to log first 8 bytes in hex//
//repeat this process for second, third file//

'use strict';

//buffer?//
const newBuffer = require(__dirname + '/lib/buffer.js');
const EE  = require('events');
const fs = require('fs');



const ee = new EE();

ee.on('first', function() {
  fs.readFile(__dirname + '/data/first.txt', function(err, data) {
    if (err) return console.log(err);
    console.log(data.toString('hex', 0, 8));
  });
});

ee.on('second', function() {
  fs.readFile(__dirname + '/data/second.txt', function(err, data) {
    if (err) return console.log(err);
    console.log(data.toString('hex', 0, 8));

  });
});

ee.on('third', function() {
  fs.readFile(__dirname + '/data/third.txt', function(err, data) {
    if (err) return console.log(err);
    console.log(data.toString('hex', 0, 8));
  });
});

ee.emit('first');
ee.emit('second');
ee.emit('third');
