'use strict';

// module.exports = function() {
//   // const input = something;
//   const fs = require('fs');
//   var oneBuf, twoBuf, threeBuf;
//
//   fs.readFile('./data/one.txt', function(err, data) {
//     oneBuf = new Buffer(data).slice(0, 8);
//     if (err) throw err;
//     console.log(oneBuf.toString('utf8'));
//     console.log(oneBuf.toString('hex'));
//     console.log(oneBuf.toString('base64'));
//
//   });
//
//   fs.readFile('./data/two.txt', function(err, data) {
//     twoBuf = new Buffer(data).slice(0, 8)
//     if (err) throw err;
//     console.log(twoBuf.toString('utf8'));
//     console.log(twoBuf.toString('hex'));
//     console.log(oneBuf.toString('base64'));
//
//   });
//
//   fs.readFile('./data/three.txt', function(err, data) {
//     threeBuf = new Buffer(data).slice(0, 8)
//     if (err) throw err;
//     console.log(threeBuf.toString('utf8'));
//     console.log(threeBuf.toString('hex'));
//     console.log(oneBuf.toString('base64'));
//
//     });
//   return 'I hate this class!';
// };


module.exports = function() {
  // const input = something;
  const fs = require('fs');
  var oneBuf, twoBuf, threeBuf;

  fs.readFile('./data/one.txt', function(err, data) {
    oneBuf = new Buffer(data).slice(0, 8);
    if (err) throw err;
    console.log(oneBuf.toString('utf8'));
    console.log(oneBuf.toString('hex'));
    console.log(oneBuf.toString('base64'));

    // return twoBuf;

  // });

  // function twoBuf() {
    return fs.readFile('./data/two.txt', function(err, data) {
      twoBuf = new Buffer(data).slice(0, 8);
      if (err) throw err;
      console.log(twoBuf.toString('utf8'));
      console.log(twoBuf.toString('hex'));
      console.log(twoBuf.toString('base64'));

      // return threeBuf;

    // });
  // }

  // function threeBuf() {
      return fs.readFile('./data/three.txt', function(err, data) {
        threeBuf = new Buffer(data).slice(0, 8);
        if (err) throw err;
        console.log(threeBuf.toString('utf8'));
        console.log(threeBuf.toString('hex'));
        console.log(threeBuf.toString('base64'));

    // });
  // };
// };

      });
    });
  });
  return 'I hate this class!';
};
