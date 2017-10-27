var instance = require('browser-sync').create();
var config = require('../config');

var init = function() {
    // Serve files from the root of this project
    return instance.init({
        server: {
            baseDir: config.destDir
        }
    });
}

var update = function(isReload) {
    if (isReload) {
        return instance.reload;
    }
    return instance.stream();
}

module.exports = {
    instance,
    init,
    update
}

