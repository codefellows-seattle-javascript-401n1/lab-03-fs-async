'use strict';

const data = require(__dirname +'/../index');
const expect = require('chai').expect;
// const fs = require('fs');

describe('testing index.js', function(){
  describe('testing fs.readFile', function(){
    it('should pass back a result array with three 8 bit hex sequences', function(done){
      data.index(function(result){
        expect((result)).to.eql([ '5261706861656c2d', '4d69636861656c61', '4c656f6e6172646f' ]);
        // expect(true).to equal(true)
        done();
      });
    });
  });
});
