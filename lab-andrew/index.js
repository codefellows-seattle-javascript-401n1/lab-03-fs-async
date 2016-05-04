'use strict';


const first = require(__dirname + '/lib/onecontrol');
const second = require(__dirname + '/lib/twocontrol');
const third = require(__dirname + '/lib/threecontrol');

var dataArr = [];
var counter = 0;

const handleData = function() {
  first(function(data) {
    dataArr[0] = data;
    counter++;
    controlData();
  });
  second(function(data) {
    dataArr[1] = data;
    counter++;
    controlData();
  });
  third(function(data) {
    dataArr[2] = data;
    counter++;
    controlData();
  });

};

handleData();

const controlData = function(cb) {
  if (counter === 3) {
    console.log(dataArr);
    return cb ? cb(dataArr) : dataArr;
  }
};
module.exports = controlData;
