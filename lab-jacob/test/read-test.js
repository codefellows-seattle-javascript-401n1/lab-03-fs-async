'use strict';

const read = require(__dirname + '/../lib/read');
const main = require(__dirname + '/../index');
const expect = require('chai').expect;

describe('testing the read module', function() {
  describe('testing if files are read properly', function() {
    it ('should log output "here is text file one"', function(done) {
      read('one.txt', function(err, data) {
        expect(err).to.equal(null);
        expect(data.toString()).to.equal('here is text file one\n');
        done();
      });
    });

    it ('should return an array of [ "6865726520697320", "616e642068657265", "616e642066696e61" ]', function(done) {
      var results = [];
      var count = 0;
      main.files.forEach(function(path, index) {
        read(path, function(err, data) {
          results[index] = data.toString('hex', 0, 8);
          count++;
          if (count === main.files.length) {
            console.log(results);
            expect(err).to.equal(null);
            expect(results).to.deep.equal(['6865726520697320', '616e642068657265', '616e642066696e61']);
            done();
          }
        });
      });
    });
  });
});
