'use strict';

const expect = require('chai').expect
const caller = require(__dirname + '/../lib/caller');

describe('testing caller.js', function(){
  describe('testing caller.asyncCall', function(){
    it('should return a buffer', function(done){
      var result = caller.asyncCallOne();
      expect(result).to.equal([ '49276d207468652066697273742066696c6520616e6420692073686f756c642062652066697273740a' ])
    });
  });
});
