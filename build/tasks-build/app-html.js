var path = require('path');
var renderTemplate = require('gulp-nunjucks-render');
var data = require('gulp-data');
var mergeJSON = require('gulp-merge-json');
var tap = require('gulp-tap');
var runSequence = require('run-sequence');

var config = require('../config');
var utils = require('../utils/utils');
var server = require('../server');

var gulp =require('gulp');
var paths = require('../paths');

/*
var fs = require('fs');
var getData = function(file) {
  var dataPath = config.srcDir + '/data/config.json'
  return JSON.parse(fs.readFileSync(dataPath, 'utf8'))
}
*/
var configJSON = {};

// Merge all JSON file into 1 file and put into variable
gulp.task('combineJSON', function() {
  return gulp.src(config.srcDir + '/**/*.json')
    .pipe(mergeJSON())
    .on('error', utils.handleErrors)
    .pipe(tap(function(file) {
      configJSON = JSON.parse(file.contents.toString());
    }))
})

// Render Nunjucks with data from merged JSON
gulp.task('renderHTML', function() {
    return gulp.src(paths.app.pages)
      .on('error', utils.handleErrors)
      // Renders template with nunjucks
      .pipe(renderTemplate({
          path: paths.app.templates,
          data: configJSON
        }))
      .on('error', utils.handleErrors)
      // output files in app folder
      .pipe(gulp.dest(config.destDir + '/'))
      .pipe(server.update())
})

module.exports.task = function(gulp, paths) {
    return runSequence('combineJSON', 'renderHTML');
}
