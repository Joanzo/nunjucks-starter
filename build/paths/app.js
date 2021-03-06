var path = require('path');

var config = require('../config');

var rootDir   = config.rootDir;
var srcDir    = config.srcDir;
var destDir   = config.destDir;

var glob = require('glob');

var utils = require('../utils/utils');

/***********************************************
*   Application script files
************************************************/

  /*
    Specifiing the source this way means:

    "take all .js files except /_main/main.js file
    and then take /_main/main.js file"

    This ensures that main.js file is loaded in the end.
    Ignore context.js files.
  */

  exports.scripts = [
    srcDir + "/app/main.js",
    srcDir + "/**/!(_context|config|main)*.js",
    "!" + srcDir + "/_vendor/**"
  ];

/***********************************************
*   Application style files
************************************************/

  exports.styles = [
    srcDir + "/app/main.scss",
    srcDir + "/app/components/**/*.scss",
    srcDir + "/app/layouts/**/*.scss"
  ];

/***********************************************
*   Application theme files
************************************************/

  exports.themes = srcDir + "/**/*-theme.scss";


/***********************************************
*   Application page files
************************************************/

  /*
    Each page file represents a page which will be rendered into .html page.
    Pages can extend layouts.

  */

  exports.pages = config.srcDir + '/pages/**/*.njk';

/***********************************************
*   Application layout files
************************************************/

  /*
    Layouts are used for "wrapping" the content of individual pages with common elements,
    such as the <head></head> and footer sections, which usually contain necessities
    such as <link> and <script> tags.
  */

  var templatesDir  = utils.getDirectoriesRecursive(srcDir + '/app');
  exports.templates = templatesDir;

  exports.html = config.srcDir + '/**/*.{njk,json}';

  exports.runtime = config.srcDir + '/**/*.html';

/***********************************************
*   Application asset files
************************************************/

  exports.assets = srcDir + "/_assets/**/*";
