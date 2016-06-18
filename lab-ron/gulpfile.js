'use strict';

const gulp = require ('gulp');
const mocha = require ('gulp-mocha');
const eslint = require('gulp-eslint');
// const watch = require ('gulp-watch');

gulp.task('mocha', function(){
  return gulp.src('test/*.js').pipe(mocha());
});

gulp.task('eslint', function(){
  return gulp.src(['*.js', '!node_modules/**']).pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError());
});


gulp.task('default', ['mocha', 'eslint' ]);
