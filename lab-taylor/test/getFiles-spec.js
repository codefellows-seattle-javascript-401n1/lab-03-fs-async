'use strict';

const expect = require('chai').expect;
const getFiles = require('../lib/getFiles');

describe('getFiles module', () => {
  describe('readFiles()', () => {
    const files = ['./data/one.txt', './data/two.txt', './data/three.txt'];
    it('should read files in order', (done) => {
      getFiles.readFiles(files, function(err, data){
        expect(data).to.equal(
        ['7b0a20202272756c',
        '0a504154483d2450',
        '0a504154483d2450']);
      });
      done();
    });
  });
});
