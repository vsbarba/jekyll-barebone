(function($) {
  $.fn.parallax = function(options) {
    var $$ = $(this);
    offset = $$.offset();
    var defaults = {
      "start": $$.offset().top,
      "stop": offset.top + $$.height(),
      "coeff": 0.95,
      "effect": 'default'
    };
    var opts = $.extend(defaults, options);
    return this.each(function() {
      $(window).bind('scroll', function() {
        windowTop = $(window).scrollTop();
        newCoord = (windowTop - opts.start) * opts.coeff;
        newCoord -= $(window).height() / 3;
        $$.css({
          "background-position": "center " + newCoord + "px"
        });


        // windowTop = $(window).scrollTop();
        // if ((windowTop >= opts.start) && (windowTop <= opts.stop)) {
        //   if (opts.effect == 'defaults') {
        //     newCoord = (windowTop - opts.start) * opts.coeff;
        //     newCoord -= $(window).height() / 3;

        //     if ($(window).width() > 1024) {
        //       $$.css({
        //         "background-position": "center " + newCoord + "px"
        //       });
        //     }
        //   } else if (opts.effect == 'position') {
        //     newCoord = (windowTop - opts.start) * opts.coeff;
        //     if ($(window).width() > 1024) {
        //       $$.css({
        //         top: newCoord
        //       });
        //     }

        //   } else if (opts.effect == 'rgba') {
        //     var opacity = ($$.offset().top - windowTop);
        //     opacity = opacity / $$.height();
        //     opacity = opacity.toFixed(2)
        //     opacity = (opacity * 100) < 0 ? opacity * -1 : opacity;
        //     $$.css({
        //       'background-color': 'rgba(0, 0, 0, ' + opacity + ')'
        //     });
        //   }
        // }
      });
    });
  };
})(jQuery);

(function($) {

  var ParaBlurrr = function(element, options) {
    this.$element = $(element)
    this.options = $.extend(ParaBlurr.DEFAULTS, options);
  }

  ParaBlurrr.DEFAULTS = {
    // "start": $$.offset().top,
    // "stop": offset.top + $$.height(),
    "coeff": 0.95,
    "effect": 'default'
  }

  $.fn.paraBlurrr = function(option) {

    this.each(function() {
      $(window).scroll(function(){
        console.log('asdsadasd');
      });
    });
  }

  $.fn.paraBlurrr.Constructor = ParaBlurrr

})(jQuery);
