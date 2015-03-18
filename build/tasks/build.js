var gulp = require('gulp');
var runSequence = require('run-sequence');
var to5 = require('gulp-babel');
var paths = require('../paths');
var compilerOptions = require('../babel-options');
var assign = Object.assign || require('object.assign');
var $ = require('gulp-load-plugins')({lazy:false});

gulp.task('build-es6', function () {
  return gulp.src(paths.source)
    .pipe(gulp.dest(paths.output + 'es6'));
});

gulp.task('build-commonjs', function () {
  return gulp.src(paths.source)
    .pipe(to5(assign({}, compilerOptions, {modules:'common'})))
    .pipe(gulp.dest(paths.output + 'commonjs'));
});

gulp.task('build-amd', function () {
  return gulp.src(paths.source)
    .pipe(to5(assign({}, compilerOptions, {modules:'amd'})))
    .pipe(gulp.dest(paths.output + 'amd'));
});

gulp.task('build-system', function () {
  return gulp.src(paths.source)
    .pipe(to5(assign({}, compilerOptions, {modules:'system'})))
    .pipe(gulp.dest(paths.output + 'system'));
});

gulp.task('component-styles', function(){
  return gulp.src(paths.stylus.index)
    .pipe($.plumber())
    .pipe($.stylus())
    .pipe($.concat('btn-component.css'))
    .pipe($.plumber.stop())
    .pipe(gulp.dest('./styles'))
});

gulp.task('build', function(callback) {
  return runSequence(
    'clean',
    ['component-styles', 'build-es6', 'build-commonjs', 'build-amd', 'build-system'],
    callback
  );
});
