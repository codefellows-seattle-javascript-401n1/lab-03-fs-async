'use strict';

const index = require(__dirname + '/../index');
const expect = require('chai').expect;

describe('testing module index.js', function() {
  describe('testing filePaths.forEach()', function() {
    it('should console.log each file in numeric order', function() {
      expect(index).to.equal([ '4f6e652074776f20', '54776f2074687265', '546872656520666f' ]);
    });
  });
});
