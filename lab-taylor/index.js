'use strict';

const getFiles = require(__dirname + '/lib/getFiles');
const files = ['one.txt', 'two.txt', 'three.txt'];
const path = './data/';

const fullPath = files.map((file)=>{
  return `${path}${file}`;
});

getFiles.readFiles(fullPath, (err, data) => {
  if (err) {console.log(err);}
  data.map((file) => {
    console.log(file);
  });
});
