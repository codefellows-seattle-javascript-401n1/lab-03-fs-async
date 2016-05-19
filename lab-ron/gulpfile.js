'use strict';

const gulp = require ('gulp');
const mocha = require ('gulp-mocha');
// const watch = require ('gulp-watch');

gulp.task('mocha', function(){
  return gulp.src('test/*.js').pipe(mocha());
});

gulp.task('watch', function(){
  gulp.watch(['**/*.js', '!node_modules/**'], 'mocha');
});
// gulp.task('mocha', function(){
//   return gulp.src(['index.js', 'lib/*.js]'])pipe.(mocha());
//
// })

gulp.task('default', ['mocha', 'watch' ]);
