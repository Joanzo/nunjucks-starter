Component.SidebarMenu = function(el, options) {
  var defaults = {
    test: "aaa"
  };
  var options = $.extend({}, defaults, options);

  var EVENT = {
    INIT: 'init',
    TEST: 'test'
  };

  var init = function() {
    $(el).metisMenu({
      activeClass: 'open'
    });
    $(el).trigger(EVENT.INIT);
  }

  var test = function() {
    $(el).trigger(EVENT.TEST);
  }

  return {
    init: init,
    option: options,
    test: test
  }

}
