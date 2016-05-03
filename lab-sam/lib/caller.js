'use strict';

const fs = require('fs');

var oneHolder = [];
var twoHolder = [];
var threeHolder = [];
var counter = 0

var asyncCallOne = function() {
  fs.readFile(__dirname + '/../first.txt', (err, data) => {
    if (err) throw err;
    oneHolder.push(data.toString('hex', 0, 8));
    console.log('first run', oneHolder);
    counter++;
    if(counter == 3) {
      console.log(oneHolder, twoHolder, threeHolder);
    }
    return data;
  });
};
var asyncCallTwo = function() {
  fs.readFile(__dirname + '/../second.txt', (err, data) => {
    if (err) throw err;
    twoHolder.push(data.toString('hex', 0, 8))
    console.log('second run');
    return data;
    counter++;
    if(counter == 3) {
      console.log(oneHolder, twoHolder, threeHolder);
    }
  });
};
var asyncCallThree = function() {
  fs.readFile(__dirname + '/../third.txt', (err, data) => {
    if (err) throw err;
    threeHolder.push(data.toString('hex', 0, 8));
    console.log('third run');
    return data;
    counter++;
    if(counter == 3) {
      console.log(oneHolder, twoHolder, threeHolder);
    };
  });
};

exports.asyncCallOne = asyncCallOne;
exports.asyncCallTwo = asyncCallTwo;
exports.asyncCallThree = asyncCallThree;
module.exports = exports;
