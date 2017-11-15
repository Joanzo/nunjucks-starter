

Component.Overlay = function(el, options) {
  var defaults = {};
  var options = $.extend({}, defaults, options);
  var el = el;

  var EVENT = {
    INIT: 'init'
  };

  var init = function() {
    $(el).on('click', function(event){
      event.preventDefault();

      $("#app").toggleClass("sidebar-open");
    });
    $(el).trigger(EVENT.INIT);
  }

  return {
    init: init,
    options: options
  }

};

Component.MobileSwipe = function(el, options) {
  var defaults = {};
  var options = $.extend({}, defaults, options);
  var el = el;

  var EVENT = {
    INIT: 'init'
  };

  var init = function() {
    if ($.browser.mobile) {
      var $appContainer = $('#app ');
      var $mobileHandle = $(el);

      $mobileHandle.swipe({
        swipeLeft: function() {
          if($appContainer.hasClass("sidebar-open")) {
            $appContainer.removeClass("sidebar-open");
          }
        },
        swipeRight: function() {
          if(!$appContainer.hasClass("sidebar-open")) {
            $appContainer.addClass("sidebar-open");
          }
        },
        // excludedElements: "button, input, select, textarea, .noSwipe, table",
        triggerOnTouchEnd: false
      });
    }
    $(el).trigger(EVENT.INIT);
  }

  return {
    init: init,
    options: options
  }

};


/*
component.sidebar = function() {

  var menu = function(el) {
    if (!$(el)) return;
    $(el).metisMenu({
      activeClass: 'open'
    });
  }

  var collapseButton = function(el) {
    if (!$(el)) return;
    $(el).on('click', function(event){
      event.preventDefault();

      $("#app").toggleClass("sidebar-open");
    });
  }

  var overlay = function(el) {
    if (!$(el)) return;
    $(el).on('click', function(event){
      event.preventDefault();

      $("#app").toggleClass("sidebar-open");
    });
  }

  var mobileSwipe = function(el) {
    if (!$(el)) return;
    $(el).each(function() {
       var defaults = {};
       options = $.extend({}, defaults, _options);
        if ($.browser.mobile) {
          var $appContainer = $('#app ');
          var $mobileHandle = $(el);

          $mobileHandle.swipe({
            swipeLeft: function() {
              if($appContainer.hasClass("sidebar-open")) {
                $appContainer.removeClass("sidebar-open");
              }
            },
            swipeRight: function() {
              if(!$appContainer.hasClass("sidebar-open")) {
                $appContainer.addClass("sidebar-open");
              }
            },
            // excludedElements: "button, input, select, textarea, .noSwipe, table",
            triggerOnTouchEnd: false
          });
        }
    });

  }

  var init = function() {
    menu('#sidebar-menu, #customize-menu');
    collapseButton(app.module('sidebar-collapse')); //'#sidebar-collapse-btn'
    overlay('#sidebar-overlay');
    mobileSwipe('#sidebar-mobile-menu-handle');
  }

  return {
    init: init,
    overlay: overlay
  }

};
*/







/*
$(function () {

  $('#sidebar-menu, #customize-menu').metisMenu({
    activeClass: 'open'
  });


  $('#sidebar-collapse-btn').on('click', function(event){
    event.preventDefault();

    $("#app").toggleClass("sidebar-open");
  });

  $("#sidebar-overlay").on('click', function() {
    $("#app").removeClass("sidebar-open");
  });

  if ($.browser.mobile) {
    var $appContainer = $('#app ');
    var $mobileHandle = $('#sidebar-mobile-menu-handle ');

    $mobileHandle.swipe({
      swipeLeft: function() {
        if($appContainer.hasClass("sidebar-open")) {
          $appContainer.removeClass("sidebar-open");
        }
      },
      swipeRight: function() {
        if(!$appContainer.hasClass("sidebar-open")) {
          $appContainer.addClass("sidebar-open");
        }
      },
      // excludedElements: "button, input, select, textarea, .noSwipe, table",
      triggerOnTouchEnd: false
    });
  }

});
*/
