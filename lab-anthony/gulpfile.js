'use strict';

const gulp = require('gulp');
const mocha = require('gulp-mocha');
const eslint = require('gulp-eslint');

gulp.task('default', ['test', 'lint']);

gulp.task('test', function() {
  return gulp.src('/**/test/*.js')
            .pipe(mocha);
});

gulp.task('lint', function() {
  return gulp.src('*.js', '/**/*.js', '/**/lib/*.js', '/**/test/*.js')
            .pipe(eslint)
            .pipe(eslint.format);
});

gulp.task('watch', function(){
  gulp.watch(['*.js', '/**/*.js', '/**/lib/*.js', '/**/test/*.js'], ['default']);
});
