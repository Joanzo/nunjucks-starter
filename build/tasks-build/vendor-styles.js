var config = require('../config');
var path = require('path');
var sass = require('gulp-sass');
var server = require('../server');
var concat = require('gulp-concat');


module.exports.task = function(gulp, paths) {
  return gulp.src(paths.vendor.styles)
    .pipe(concat('vendor.css'))
    .pipe(gulp.dest(config.destDir + "/assets/css"))
    .on( 'error', sass.logError )
    .pipe(server.update());
};
