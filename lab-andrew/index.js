'use strict';


// const readFile = require(__dirname + '/lib/control');

const first = require(__dirname + '/lib/onecontrol');
const second = require(__dirname + '/lib/control');
const third = require(__dirname + '/lib/threecontrol');
var dataArr = [];
var counter = 0;

const handleData = module.exports = function(file) {
  first(file, function(data) {
    dataArr[0] = data;
    counter++;
    controlData();
  });
  second(file, function(data) {
    dataArr[0] = data;
    counter++;
    controlData();
  });
  third(file, function(data) {
    dataArr[0] = data;
    counter++;
    controlData();
  });

  function controlData(cb) {
    if (counter === 3) {
      console.log(dataArr);
      return cb ? cb(dataArr) : dataArr;
    }
  }
};

handleData(function(data) {
  console.log(data);
});
