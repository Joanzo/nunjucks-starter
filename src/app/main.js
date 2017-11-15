var Component = {};

var App = function() {

  var config = {
    dataComponent: 'data-component',
    dataOption: 'data-options'
  }

  // Wrap component name inside [data-component="componentName"]
  var module = function(name) {
    return '[' + config.dataComponent + '="' + name + '"]';
  }

  // List of function task before init, immediately running function
  var preInit = function() {
    // start load bar
    NProgress.start();

  }();


  var init = function() {
    // Load list of module inside component object and init
    for (var key in Component) {

      $(module(key)).each(function() {
        var el = $(this);
        var option = $(this).attr(config.dataOption);
        option = (option) ? JSON.parse(option) : null;

        var obj = new Component[key](el, option);

        obj.init();
        el.data(key, obj);
      });

    }

    $('body').addClass('loaded');
    // end loading bar
    NProgress.done();

  }

  return {
    init: init
  }

}();


$(function() {
  App.init();
});

