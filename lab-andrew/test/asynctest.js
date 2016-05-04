'use strict';
const controlData = require(__dirname + '/../index');
const expect = require('chai').expect;

describe('testing index', function() {
  describe('testing modules', function() {
    it('Should return first 8 hex', function(done) {
      controlData(function(data) {
        expect(data).to.be.eql([ '4920616d206f6e65', '4920616d2074776f', '4920616d20746872']);
        done();
      });
    });
  });
});
