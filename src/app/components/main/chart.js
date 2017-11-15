Component.Chart = function(el, options) {
  var defaults = {};
  var options = $.extend({}, defaults, options);
  var el = el;

  var EVENT = {
    INIT: 'init'
  };


  var init = function() {
    var result = nunjucks.render('chart.tpl', {text: 'Something Here', imageExample: 'data:image/gif;base64,R0lGODlhAQABAIABAAJ12AAAACwAAAAAAQABAAACAkQBADs='});
    $(el).html(result);
    /*$.getScript( "/assets/templates/chart.js", function( data, textStatus, jqxhr ) {
        console.log('data: ', data);
        var result = nunjucks.render('chart.tpl', {text: 'Something Here'});
        console.log('result: ', result);
    });*/

    $(el).trigger(EVENT.INIT);
  }

  return {
    init: init,
    options: options
  }

};
