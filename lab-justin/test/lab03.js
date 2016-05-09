'use strict';

const hexPractice = require(__dirname + '/../lib/lab03');
const expect = require('chai').expect;

describe('test module lib/lab03.js', function(){
  describe('test fx index()', function(){
    it('should return hm?', function(done){
      hexPractice(function(err, data){

        expect(data[0]).to.equal('312e4c6f72656d20');
        expect(data[1]).to.equal('322e666f72205457');
        expect(data[2]).to.equal('332ef09f99882ef0');

        done();

      });
    });
  });
});
