
'use strict';

const processModule = require(__dirname +'/../lib/process');
const expect = require('chai').expect;


describe('testing process.js', function(){
  describe('testing fs.readFile', function(){
    it('should pass back a result array with three 8 bit hex sequences', function(done){
      processModule.firstEight(function(result) {
        expect((result)).to.eql((['49206c6f76652042', '49206c6f76652043', '49206c6f76652066']));
        done();
      });
    });
  });
});
