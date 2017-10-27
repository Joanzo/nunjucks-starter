var config = require('../config');

var rootDir   = config.rootDir;
var srcDir    = config.srcDir;
var destDir   = config.destDir;
var npmDir = config.npmDir;

/*******************************************************************************

  ...Few words about vendor files

  For not including all scripts manually we use plugin
  called main-bower-files.

  It returns glob of files based on "main" field in vendor packages "bower.json".
  Orders of files will be as per our bower.json, so if you have some libraries
  that should be loaded on first, just move them upwards in project "bower.json".

  If any of files that you want to access is not listed in vendor package, you can
  define files for that package manually in bower.json "overrides" field.

  For more docs visit.
  https://github.com/ck86/main-bower-files#main-bower-files

  If for any reasons you don't like this approach, and want list your files
  manually, you can just pass manual glob string or array to "src" option

  eg.

  export.scripts: [
    bowerDir + "jquery/dist/jquery.js",
    bowerDir + "angular/jquery.js",
  ]

********************************************************************************/

/***********************************************
*   Vendor script files
************************************************/


  exports.scripts = [
    npmDir + '/jquery/dist/jquery.js',
    npmDir + '/jquery.browser/dist/jquery.browser.js',
    npmDir + '/popper.js/dist/umd/popper.js',
    npmDir + '/bootstrap/dist/js/bootstrap.js',
    npmDir + '/raphael/raphael.js',
    npmDir + '/dropzone/dist/dropzone.js',
    npmDir + '/jquery-sparkline/jquery.sparkline.js',
    npmDir + '/jquery-touchswipe/jquery.touchSwipe.js',
    npmDir + '/jquery-validation/dist/jquery.validate.js',
    npmDir + '/jquery.browser/dist/jquery.browser.js',
    npmDir + '/jquery.flot/jquery.flot.js',
    npmDir + '/jquery.flot/jquery.flot.resize.js',
    npmDir + '/jquery.flot/jquery.flot.pie.js',
    npmDir + '/jquery.flot/jquery.flot.time.js',
    npmDir + '/jquery.flot.tooltip/js/jquery.flot.tooltip.js',
    npmDir + '/jqvmap/dist/jquery.vmap.js',
    npmDir + '/jqvmap/dist/maps/jquery.vmap.world.js',
    npmDir + '/metismenu/dist/metisMenu.js',
    npmDir + '/morris.js.so/morris.js',
    npmDir + '/nprogress/nprogress.js',
    npmDir + '/quill/dist/quill.js',
    npmDir + '/responsive-toolkit/dist/bootstrap-toolkit.js',
    npmDir + '/sortablejs/Sortable.js',
    npmDir + '/jquery-sortablejs/jquery-sortable.js',
    npmDir + '/tether/dist/tether.js',
    npmDir + '/tinycolor2/tinycolor.js'
  ];



/***********************************************
*   Vendor style files
************************************************/
  exports.styles = [
    npmDir + '/font-awesome/css/font-awesome.css',
    npmDir + '/bootstrap/dist/css/bootstrap.css',
    npmDir + '/bootstrap/dist/css/bootstrap-theme.css',
    npmDir + '/jqvmap/dist/jqvmap.css',
    npmDir + '/animate.css/animate.css',
    npmDir + '/quill/quill.base.css',
    npmDir + '/quill/quill.snow.css',
    npmDir + '/dropzone/dropzone.css'
  ];




/***********************************************
*   Vendor assets files
************************************************/

  /*
    All files which are not .js, .css, .less and fonts
  */

  exports.assets = [];


/***********************************************
*   Vendor font files
************************************************/

  exports.fonts = [
    npmDir + '/font-awesome/fonts/fontawesome-webfont.eot',
    npmDir + '/font-awesome/fonts/fontawesome-webfont.svg',
    npmDir + '/font-awesome/fonts/fontawesome-webfont.ttf',
    npmDir + '/font-awesome/fonts/fontawesome-webfont.woff',
    npmDir + '/font-awesome/fonts/fontawesome-webfont.woff2',
    npmDir + '/font-awesome/fonts/FontAwesome.otf'
  ];
