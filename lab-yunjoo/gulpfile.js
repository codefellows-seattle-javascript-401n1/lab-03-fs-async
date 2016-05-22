const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');

gulp.task('lint', function(){
  return gulp.src(['*.js','lib/*.js','test/*.js'])
  .pipe(eslint().pipe(eslint.format()))
  .pipe(eslint.failAfterError());
});

gulp.task('mocha', function(){
  return gulp.src(['*.js','lib/*.js','test/*.js'])
  .pipe(mocha());
});

gulp.task('checking', function(){
  gulp.watch(['*.js','lib/*.js','test/*.js'],['lint','mocha']);
});

gulp.task('default',['lint','mocha','checking']);
