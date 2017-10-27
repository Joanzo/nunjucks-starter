var config = require('../config');
var server = require('../server');

module.exports.task = function(gulp, paths) {
/*  gulp.src(paths.vendor.assets)
    .pipe(gulp.dest(config.destDir + "/assets"));
    .pipe(server.update());*/

  return gulp.src(paths.vendor.fonts)
    .pipe(gulp.dest(config.destDir + "/assets/fonts"))
    .pipe(server.update());
};
