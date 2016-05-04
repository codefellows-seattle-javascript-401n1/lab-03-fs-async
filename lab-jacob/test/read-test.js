'use strict';

const read = require(__dirname + '/../lib/read');
const expect = require('chai').expect;

describe('testing the read file', function() {
  describe('testing if files read in order', function() {
    it ('should console one.txt first before reading three.txt', function() {
      expect(read).to.eql.();
    });
  });
});
