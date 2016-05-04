'use strict';

const expect = require('chai').expect
const caller = require(__dirname + '/../lib/caller');


describe('testing caller.js', function(){
  describe('testing caller.asyncCallOne', function(){
    it('should return [ "49276d2074686520" ]', function(done){
        expect(caller.asyncCallOne()).to.eql(
        [ '49276d2074686520' ]
        )
      done();
    });
  });
});
