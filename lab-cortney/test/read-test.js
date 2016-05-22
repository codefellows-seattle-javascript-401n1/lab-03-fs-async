'use strict';

const fileReader = require(__dirname + '/../index');
const expect = require('chai').expect;

describe('testing module index.js', function() {
  describe('testing filePaths.forEach()', function() {
    it('should console.log each file in numeric order', function(){
      fileReader(function(result){
        expect(result).to.equal([ '4f6e652074776f20', '54776f2074687265', '546872656520666f' ]);
      });
    });
  });
}); // end of describe testing module
