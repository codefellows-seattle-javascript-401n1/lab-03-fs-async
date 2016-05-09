'run strict';

const gulp = require('gulp');
const mocha = require('gulp-mocha');
const eslint = require('gulp-eslint');

var paths = ['**/*.js', 'test/*.js'];

gulp.task('mocha', function(){
  return gulp.src('test/*.js', !'node_modules')
  .pipe(mocha());
});

gulp.task('eslint', function(){
  return gulp.src(paths)
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError());
});

gulp.task('watch', ()=>{
  gulp.watch('**/*.js', !'package.json', ['eslint']);
  gulp.watch('test/*.js', ['eslint', 'mocha']);

});
gulp.task('default', ['eslint', 'mocha', 'watch']);
