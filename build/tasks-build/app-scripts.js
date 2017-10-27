var config = require('../config');
var concat = require('gulp-concat');
var server = require('../server');

module.exports.task = function(gulp, paths) {
  return gulp.src(paths.app.scripts)
    .pipe(concat('app.js'))
    .pipe(gulp.dest(config.destDir + '/assets/js'))
    .pipe(server.update());
};
