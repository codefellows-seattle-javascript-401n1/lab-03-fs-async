'use strict';

var expect = require('chai').expect;
var showContents = require(__dirname + '/../lib/showContents');

describe('Testing showContents module', function(){
  describe('Testing showContents()', function(){
    it('should return "hello bob"', function(){
      const result = showContents.showContents();
      /*
      1.  expect(0 files).to print if there are no docs();
      2.  expect (3 files).to print if 3 files in docs
      3.  expect (4 files).to print if 4 files in docs
      4.  expect the (length of a each file printed). .to.have.lengthOf(8);
      5. expect (printed content).to be (hex values)
      6. expect (files printed).to be in (ascending order);
      */
    });
  });
});
