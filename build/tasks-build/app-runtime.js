var nunjucks = require('gulp-nunjucks');
var runSequence = require('run-sequence');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var gutil = require('gulp-util');

var config = require('../config');
var utils = require('../utils/utils');
var server = require('../server');


// Precompile Nunjucks into js file
module.exports.task = function(gulp, paths) {
    console.log('paths.app.runtime', paths.app.runtime)
    return gulp.src(config.srcDir + '/**/*.tpl')
      .pipe(rename({dirname: ''}))
      // Renders template with nunjucks
      .pipe(nunjucks.precompile({
        name: file => {
          gutil.log(file.path);
        }
      }))
      .on('error', utils.handleErrors)
      // output files in app folder
      .pipe(concat('templates.js'))
      .pipe(gulp.dest(config.destDir + '/assets/js'))
      .pipe(server.update())
};


