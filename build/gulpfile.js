var glob = require('glob');
var path = require('path');

var gulp = require('gulp');
var utils = require('./utils/utils');

var config = require('./config');
var server = require('./server');

var paths = require('./paths');

var del = require('del');

var buildTasks = utils.loadTasks(gulp, paths);

gulp.task('build', buildTasks);



// use default task to launch Browsersync and watch JS files
gulp.task('serve', buildTasks, function () {

    server.init();

    // When style changes recompile styles
    gulp.watch(paths.app.styles, ['app-styles']);

    // When scripts changes recompile styles
    gulp.watch(paths.app.scripts, ['app-scripts']);

    // When pages change recompile page
    gulp.watch(paths.app.html, ['app-html']);

    // When runtime change recompile js
    gulp.watch(paths.app.runtime, ['app-runtime']);

});

// Rerun the task when a file changes
/*
gulp.task('serve', function() {


  // When style changes recompile styles
  gulp.watch(paths.app.styles, function() {
      gulp.start('app-styles');
  });

});
*/
// // Run this task for development
/*
gulp.task('develop', [
  'build',
  'watch',
  'connect'
]);
*/

gulp.task('default', ['build', 'serve']);
