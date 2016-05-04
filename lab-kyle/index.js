'use strict';

const read = require( __dirname + '/lib/fs-function');
const firstone = __dirname + '/data/one.txt';
const secondone = __dirname + '/data/two.txt';
const thirdone = __dirname + '/data/three.txt';
const EventEmmiter = require('events');

const ee = new EventEmmiter();

ee.on('first', function() {
  read.bufferfiles(firstone, (err, data) => {
    console.log(data.toString('hex', 0, 7));
  });
});

ee.on('second', function() {
  read.bufferfiles(secondone, (err, data) => {
    console.log(data.toString('hex', 0, 7));
  });
});

ee.on('third', function() {
  read.bufferfiles(thirdone, (err, data) => {
    console.log(data.toString('hex', 0, 7));
  });
});

ee.emit('first');
ee.emit('second');
ee.emit('third');
