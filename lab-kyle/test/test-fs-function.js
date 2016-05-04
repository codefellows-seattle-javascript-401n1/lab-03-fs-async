'use strict';

const read = require(__dirname + '/../lib/fs-function');
const expect = require('chai').expect;

describe('testing module lib/fs-function.js', function() {
  describe('testing function bufferfiles()', function() {
    it('should return the first 8 bits of a text file in hex ', function(done){
      read.bufferfiles(__dirname + '/../data/one.txt', function(err, data){
        expect(err).to.equal(err);
        expect(data.toString('hex', 0, 7)).to.equal('68656c6c6f2063');
        done();
      });
    });
  });
});
