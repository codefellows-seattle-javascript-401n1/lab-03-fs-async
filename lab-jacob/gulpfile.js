'use strict';

const gulp = require('gulp');
const mocha = require('gulp-mocha');
const eslint = require('gulp-eslint');

gulp.task('test', function() {
  return gulp.src('test/read-test.js')
    .pipe(mocha());
});

gulp.task('lint', function() {
  return gulp.src(['**/*.js', '!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError);
});

var watcher = gulp.watch('**/*.js', ['lint', 'test']);
watcher.on('change', function() {
  console.log('File ' + event.path + ' was ' + event.type + 'running tasks...');
});

gulp.task('default', ['test', 'lint']);
