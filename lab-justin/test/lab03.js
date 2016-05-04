'use strict';

const hexPractice = require(__dirname + '/../lib/lab03');
const expect = require('chai').expect;

describe('test module lib/lab03.js', function(){
  describe('test fx index()', function(){
    it('should return hm?', function(done){
      expect(hexPractice()).to.be.equal('I hate this class!');
      done();
    });
  });
});
