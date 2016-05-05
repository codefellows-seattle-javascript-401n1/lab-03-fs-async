
'use strict';

const data = require(__dirname +'/../lib/process.js');
const expect = require('chai').expect;
const fs = require('fs');

describe('testing process.js', function(){
  describe('testing fs.readFile', function(){
    it('should pass back a result array with three 8 bit hex sequences', function(done){
      fs.firstEight(data, function(err,index){
      expect(data.to.be.equal([ '49206c6f76652042', '49206c6f76652043', '49206c6f76652066' ]);
      done();
    });
    });
  });
});
