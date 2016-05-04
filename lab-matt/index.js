'use strict';

const first = require(__dirname + '/lib/first.js');
const second = require(__dirname + '/lib/second.js');
const third = require(__dirname + '/lib/third.js');

const result = [];
var count = 0;


const mainRun = module.exports = function mainRun(callback){
  first(function(data){
    result[0]=data;
    count++;
    logData();
  });

  second(function(data){
    result[1]=data;
    count++;
    logData();

  });

  third(function(data){
    result[2]=data;
    count++;
    logData();
  });

  function logData(){
    if (count === 3){
      callback(result);
    }
  }
};

mainRun(function(data){
  console.log(data);
});
