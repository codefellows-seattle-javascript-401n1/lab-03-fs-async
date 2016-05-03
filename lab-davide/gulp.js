const gulp = require('gulp');
const mocha = require('mocha');

gulp.task('default', function() {
  return gulp.src('/test/test.js', {read: false})
  .pipe(mocha({reporter: 'nyan'}));
});
