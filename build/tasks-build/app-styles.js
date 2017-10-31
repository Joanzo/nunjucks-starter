var path = require('path');
var config = require('../config');
var concat = require('gulp-concat');
var sass =require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');

var server = require('../server');
var utils = require('../utils/utils');

module.exports.task = function(gulp, paths) {
  return gulp.src(paths.app.styles)
    .pipe(concat('app.css'))
    .pipe(
      sass({
        includePaths: [
          path.resolve( config.srcDir ),
          path.resolve( config.npmDir ),
        ]
      })
      .on( 'error', sass.logError )
    )
    .pipe(
      autoprefixer()
      .on('error', utils.handleErrors)
    )
    .pipe(gulp.dest(config.destDir + '/assets/css/'))
    .pipe(server.update());
}
