'use strict';

const EventEmitter = require('events');
const someFun = require(__dirname + '/lib/fs-read.js');

var ee = new EventEmitter();

ee.on('read', ()=>{
  someFun.fsFun(__dirname + '/data/first.txt', function(err, data){
    console.log(data.toString('hex', 0, 8));
  });
});

ee.on('read', ()=>{
  someFun.fsFun(__dirname + '/data/second.txt', function(err, data){
    setTimeout(console.log(data.toString('utf8', 0, 8)), 10000);
  });
});

ee.on('read', ()=>{
  someFun.fsFun(__dirname + '/data/third.txt', function(err, data){
    console.log(data.toString('hex', 0, 8));
  });
});

ee.emit('read');
