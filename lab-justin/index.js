'use strict';

const hexInsane = require(__dirname + '/lib/lab03');

hexInsane(function(err, data){
  if (err) throw err;
  console.log('results :', data);
});
