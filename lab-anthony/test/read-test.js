'use strict';

const expect = require('chai').expect;
const fs = require('fs');

describe('Testing read module', function() {
  describe('Testing read() file reading', function() {
    it('Should error', function(done) {
      var pathsArray = [
        __dirname + '/../data/nothing.txt'];

      pathsArray.forEach(function(file){
        fs.readFile(file, (err, data) => {
          expect(err).to.be.equal(err);
          expect(data).to.be.equal(undefined);
          done();
        });
      });
    });
  });
});

describe('Testing read module', function() {
  describe('Testing read()', function() {
    it('Should list buffers in order', function(done) {
      var pathsArray = [
        __dirname + '/../data/first.txt',
        __dirname + '/../data/second.txt',
        __dirname + '/../data/third.txt'];
      var dataArray = [];

      pathsArray.forEach(function(file, index){
        fs.readFile(file, (err, data) => {
          if (err) throw err;
          dataArray[index] = data.toString('hex', 0, 8);

          if (pathsArray.length === dataArray.length) {
            expect(dataArray.length).to.be.equal(3);
            expect(dataArray[0]).to.be.equal('46697273743a2054');
            expect(dataArray[2]).to.be.equal('54686972643a2042');
            done();
          }
        });
      });
    });
  });
});
