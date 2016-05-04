'use strict';
const main = require(__dirname + '/index');
const expect = require('chai').expect;


describe('asynch testing', function() {
  describe('data files fire in order', function () {
    it('should return first 8 bits of hex in order(one, two, three)', function(){
      main(function(data) {
        expect(data).to.eql(['6d6f726e696e670a','61667465726e6f6f','6576656e696e670a']);
      });
    });
  });
});
