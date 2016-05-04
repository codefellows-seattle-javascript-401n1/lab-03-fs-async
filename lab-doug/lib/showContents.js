'use strict';

var fs = require('fs');

function showContents(){
  fs.readdir(__dirname + '/../docs/', function(err, files){
//files.forEach(function(index){})
    // console.log('file.length before for loop is: '+  files.length);
    for(var i = 0; i < files.length; i++){
      // console.log('file.length in for loop is: '+  files.length);
      var name = files[i];
      // console.log('value of var name is: ' + name);
      fs.readFile(__dirname + '/../docs/' + name,'hex', function(err, data){
        console.log('the value of var name in the readFile () is: ' + name);//does not work, result is 0003.txt
        if(err) throw err;
        console.log ('The data is: ' + data);
      });
    }
  });

}
exports.showContents = showContents;
