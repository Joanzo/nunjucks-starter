var config = require('../config');
var concat = require('gulp-concat');
var server = require('../server');

module.exports.task = function(gulp, paths) {
  return gulp.src(paths.app.assets)
    .pipe(gulp.dest(config.destDir + '/assets/img'))
    .pipe(server.update());
};
