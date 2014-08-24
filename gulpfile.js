'use strict';
var gulp = require('gulp');
var mocha = require('gulp-mocha');

gulp.task('mocha', function(){
  return gulp.src('test/**', {read: false})
  .pipe(mocha({reporter: 'spec'}));
});

gulp.task('watch', function(){
  gulp.watch('index.js', ['mocha']);
  gulp.watch('test/*.js', ['mocha']);
});

gulp.task('default', ['mocha']);