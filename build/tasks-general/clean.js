var gulp = require('gulp');
var del = require('del');
var config = require('../config');

gulp.task('clean', function () {

    del(['../tmp'], {force:true}).then(paths => {
        console.log('Deleted files and folders:\n', paths.join('\n'));
    });

});
