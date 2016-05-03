'use strict';

// const hexPractice = require(__dirname + '/../lib/lab03');
// const expect = require('chai').expect;
//
// describe('test module lib/lab-03.js', function(){
//   describe('test function index()', function(){
//     it('should return hmmmm?' , function(){
//       expect(lab03().to.equal('I hate this class!')
//
//     );
//   });
// });
// });

const hexPractice = require(__dirname + '/../lib/lab03');
const expect = require('chai').expect;

describe('test module lib/lab03.js', function(){
  describe('test fx index()', function(){
    it('should return hm?', function(){
      expect(hexPractice()).to.equal('I hate this class!');
    });
  });
});
