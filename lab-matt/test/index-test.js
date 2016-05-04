'use strict';

const main = require(__dirname + '/../index');
const expect = require('chai').expect;

describe('testing module in index', function(){
  describe('testing main function', function(){
    it('functions should run in order(first, second, third)', function(){
      main(function (data) {
        expect(data).to.eql(['4275742049206d75','546865204575726f','4120776f6e646572']);
      });
    });
  });
});
