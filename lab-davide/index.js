//read first file//
//need to log first 8 bytes in hex//
//repeat this process for second, third file//

'use strict';

//buffer?//
const read = require(__dirname + '/lib/buffer');
const EE  = require('events');
// const fs = require('fs');

const ee = new EE();

//will need to repeat this function below for second, third//
ee.on('first', function() {
  read.buffer(__dirname + '/data/one.txt', function(err, data) {
    if (err) return console.log(err);
    console.log(data.toString('hex', 0, 8));
  });
});

ee.on('second', function() {
  read.buffer(__dirname + '/data/two.txt', function(err, data) {
    if (err) return console.log(err);
    console.log(data.toString('hex', 0, 8));
  });
});

ee.on('third', function() {
  read.buffer(__dirname + '/data/three.txt', function(err, data) {
    if (err) return console.log(err);
    console.log(data.toString('hex', 0, 8));
  });
});

ee.emit('first');
ee.emit('second');
ee.emit('third');
