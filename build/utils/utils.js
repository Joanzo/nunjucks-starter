var glob = require('glob');
var path = require('path');
var fs = require('fs')
var lstatSync = fs.lstatSync;
var readdirSync = fs.readdirSync;
var join = path.join;

var notify = require('gulp-notify');


const loadTasks = (gulp, paths) => {
  var taskNames = [];

  // Load all tasks from tasks folder
  glob.sync(path.resolve(__dirname, '../tasks-build/*.js')).forEach(function(filePath) {
    var taskName = path.basename(filePath, '.js');
      taskNames.push(taskName);

    var task = require(filePath).task;
    var deps = require(filePath).deps || [];

    gulp.task(taskName, deps, function() {
      task(gulp, paths)
    });
  });

  return taskNames;
}



const getDirectoriesRecursive = (srcpath) => {
  const flatten = (lists) => {
    return lists.reduce(function(a, b) {
      return a.concat(b);
    }, []);
  }
  const isDirectory = source => lstatSync(source).isDirectory();
  const getDirectories = source => {
    return readdirSync(source).map(name => join(source, name)).filter(isDirectory);
  }
  return [srcpath, ...flatten(getDirectories(srcpath).map(getDirectoriesRecursive))];
}

const handleErrors = (errorObject, callback) => {
  notify.onError(errorObject.toString().split(': ').join(':\n')).apply(this, arguments)
  // Keep gulp from hanging on this task
  if (typeof this.emit === 'function') this.emit('end')
}

module.exports.loadTasks = loadTasks;
module.exports.getDirectoriesRecursive = getDirectoriesRecursive;
module.exports.handleErrors = handleErrors;
