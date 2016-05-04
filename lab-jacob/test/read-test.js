'use strict';

const read = require(__dirname + '/../lib/read');
const main = require(__dirname + '/../index');
const expect = require('chai').expect;

describe('testing the read', function() {
  describe('testing if files are read', function() {
    it ('should log output "here is text file one"', function(done) {
      read('one.txt', function(err, data) {
        expect(err).to.equal(null);
        expect(data.toString()).to.equal('here is text file one\n');
        done();
      });
    });

    it ('should return an array of [ "68657265206973", "616e6420686572", "616e642066696e" ]', function(done) {
      expect(main).to.equal('[ \'68657265206973\', \'616e6420686572\', \'616e642066696e\' ]');
      done();
    });
  });
});
