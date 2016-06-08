'use strict';
const readFiles = require(__dirname + '/../lib/readFiles');
const expect = require('chai').expect;
var paths = ['/data/one.txt', '/data/two.txt', '/data/three.txt'];
describe('testing index', function() {
  describe('testing modules', function() {
    it('Should return first 8 hex', function(done) {
      readFiles(paths, function(data) {
        expect(data).to.be.eql([ '4920616d206f6e65', '4920616d2074776f', '4920616d20746872' ]);
        done();
      });
    });
  });
});
