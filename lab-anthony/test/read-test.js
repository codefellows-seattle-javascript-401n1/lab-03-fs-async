'use strict';

const expect = require('chai').expect;
const read = require('./../lib/read');

describe('Testing the read module', function() {
  describe('Testing read function', function() {
    it('Should return 8 bytes of hex data as a string', function(done) {
      const pathsArray = [
        __dirname + '/../data/first.txt',
        __dirname + '/../data/second.txt',
        __dirname + '/../data/third.txt'
      ];
      read(pathsArray, function(dataArray) {
        expect(dataArray[1]).to.be.equal('5365636f6e643a20');
      });
      done();
    });
  });
});
