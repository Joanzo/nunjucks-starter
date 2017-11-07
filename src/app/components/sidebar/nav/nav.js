component.sidebarMenu = function(el, options) {
  var defaults = {
    test: "aaa"
  };
  var options = $.extend({}, defaults, options);
  this.el = el;
console.log('CONSTRUCTOR this.el: ', this.el);
console.log('CONSTRUCTOR this', this);
  var EVENT = {
    INIT: 'init',
    TEST: 'test'
  };

  var init = function() {
    console.log('INIT this', this);
    console.log('INIT el', el);
    console.log('INIT this.el: ', this.el);
    console.log('INIT options: ', options);
    console.log('INIT this.options: ', this.options);

    $(el).metisMenu({
      activeClass: 'open'
    });
    $(el).trigger(EVENT.INIT);
  }

  var test = function() {
    $(el).trigger(EVENT.TEST);
  }

  var setOptions = function(a) {
    this.options = a;
  }

  return {
    init: init,
    options: options,
    test: test,
    setOptions: setOptions
  }

}
