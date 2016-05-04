var gulp = require('gulp');
var mocha = require('gulp-mocha');
var eslint = require('gulp-eslint');

gulp.task('default', ['test', 'lint'],  function() {
});

gulp.task('test', function(){
  gulp.src(__dirname + '/test/*.js')
  .pipe(mocha());
});

gulp.task('lint', function(){
  return gulp.src(['**/*.js','!node_modules/**'])
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError());
});

var watcher = gulp.watch([__dirname + '**/*.js', '!node_modules/**', '!package.json'], ['lint', 'test']);
watcher.on('change', function(event){
  console.log(event.path + ' was ' + event.type + ', running tasks...');
});
