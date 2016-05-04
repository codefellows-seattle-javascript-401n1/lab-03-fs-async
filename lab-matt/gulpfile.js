'use strict';

const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');

gulp.task('lint', function(){
  return gulp.src(['**/*.js','!node_modules/**'])
  .pipe(eslint()).pipe(eslint.format());
});

gulp.task('test', function(){
  return gulp.src(__dirname + '/test/*.js')
  .pipe(mocha());
});

gulp.task('default', ['test', 'lint'], function(){

});
