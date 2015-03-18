var gulp = require('gulp');
var paths = require('../paths');
var browserSync = require('browser-sync');

// outputs changes to files to the console
function reportChange(event){
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
}

// this task wil watch for changes
// to js, html, and css files and call the
// reportChange method. Also, by depending on the
// serve task, it will instantiate a browserSync session
gulp.task('watch', ['serve'], function() {
  var source = [paths.source , paths.demo.source];
  var html = [paths.html , paths.demo.html  ];

  gulp.watch(paths.stylus.all, ['demo:styles' , browserSync.reload]).on('change', reportChange);
  gulp.watch(source          , ['demo:system' , browserSync.reload]).on('change', reportChange);
  gulp.watch(html            , ['demo:html'   , browserSync.reload]).on('change', reportChange);
  gulp.watch(paths.style     , browserSync.reload).on('change', reportChange);
});
