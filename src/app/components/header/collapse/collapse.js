component.collapseButton = function(el, options) {
  var defaults = {
    openClass: 'sidebar-open'
  };
  var options = $.extend({}, defaults, options);
  var el = el;

  var EVENT = {
    INIT: 'init'
  };

  var init = function() {
    $(el).on('click', function(event){
      event.preventDefault();

      $("#app").toggleClass(options.openClass);
    });
    $(el).trigger(EVENT.INIT);
  }

  return {
    init: init,
    options: options
  }

};
