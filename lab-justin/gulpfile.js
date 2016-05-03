'use strict';

const gulp = require('gulp');
const mocha = require('gulp-mocha');
const eslint = require('eslint');
// const chai = require('chai');

gulp.task('default', function(){

  return gulp.src('test/*.js')
  .pipe(mocha());
});

gulp.task('eslint', function(){
  return gulp.src('*.js')
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError());
});
