'use strict';

const expect = require('chai').expect;
const getFiles = require('../lib/getFiles');

describe('Testing module lib/getFiles.js', function() {
  describe('readFile()', function() {
    it('Should return first 8 hex bytes of each file', function(done) {
      const files = ['./data/one.txt', './data/two.txt', './data/three.txt'];
      const bytes = ['5a6f6d6269652069', '596f757220626f6e', '486f646f72212048'];

      getFiles(files, function(err, fd) {
        fd.forEach(function(val, idx) {
          expect(val.toString('hex', 0, 8)).to.equal(bytes[idx]);
        });
      });
      done();
    });
  });

  describe('readFile() callback error', function() {
    it('Should throw an error, given one or more bad file paths', function(done) {
      const files = ['./data/blue.txt', './data/green.txt', './data/yellow.txt'];

      getFiles(files, function(err) {
        expect(err).to.equal('TypeError: Cannot read property \'toString\' of undefined');
      });
      done();
    });
  });
});
