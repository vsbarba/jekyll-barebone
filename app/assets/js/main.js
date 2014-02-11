/*! ========================================================================
 * Project #iamdash2 v0.0.1
 * Authored by: Victor S. Barba [vsbarba@gmail.com]
 *
 * @File Information:
 * ------------------
 * This javascript file is using semantic versioning (http://semver.org)
 * The APIs declared may change anytime as the project requires, it will bump
 * to version 1.0.0 once the team had established and finalised flow and
 * functionality.
 *
 * @Synopsis:
 * ------------------
 * I love #iamdash2 :))
 * ========================================================================= */

+ function($) {
  "use strict";

  var GlobalConfig = {};
  GlobalConfig.accessToken = '178940740.dcfa734.dd4c485b4eb6453baec6324b47f5b01b';
  GlobalConfig.hashtag = 'iamdash2';

  // End Points
  var InstagramAPI = {};
  InstagramAPI.recentMediaEp = 'https://api.instagram.com/v1/tags/' + GlobalConfig.hashtag + '/media/recent?access_token=' + GlobalConfig.accessToken;
  InstagramAPI.lastMediaId = '';
  InstagramAPI.nextUrl = '';
  /*
   *  Escape Characters
   */

  function escapeRegExp(str) {
    return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|\"]/g, '\\$&');
  }



  var DashTwo = function() {
    return this;
  }

  DashTwo.
  default = {
    accessToken: null,
    hashtag: null
  }

  DashTwo.prototype.loggerIG = {

    _startWebservice: function(url, timestamp) {
      console.log('===== Instagram Web Service Call =====');
      console.log('URL: ' + url);
      console.log('Timestamp: ' + timestamp);
    },

    _endWebservice: function(url, timestamp) {
      console.log('URL: ' + url);
      console.log('Timestamp: ' + timestamp);
      console.log('===== Ending Instagram Web Service Call =====');
    }

  }

  DashTwo.prototype.webservice = {

    _getMostRecentMedia: function() {
      $.ajax({
        method: 'GET',
        dataType: 'jsonp',
        url: InstagramAPI.recentMediaEp,
        success: function(data) {
          console.log(data);
          InstagramAPI.lastMediaId = data.pagination.max_tag_id;
          InstagramAPI.nextUrl = data.pagination.next_url;
          dashTwo.loggerIG._startWebservice(InstagramAPI.recentMediaEp, 'today');
          for (var i = 0; i < data.data.length; i++) {
            $('.temp-append').append(dashTwo.template._imgThumbnail(data.data[i]));
          }
          dashTwo.loggerIG._endWebservice(InstagramAPI.recentMediaEp, 'today');
        },
        error: function(data) {
          console.log('error');
        }
      });
    },

    _getRecentMediaById: function(nextUrl) {
      $.ajax({
        method: 'GET',
        dataType: 'jsonp',
        url: nextUrl,
        success: function(data) {
          InstagramAPI.lastMediaId = data.pagination.max_tag_id;
          InstagramAPI.nextUrl = data.pagination.next_url;
          dashTwo.loggerIG._startWebservice(InstagramAPI.recentMediaEp, 'today');
          for (var i = 0; i < data.data.length; i++) {
            $('.temp-append').append(dashTwo.template._imgThumbnail(data.data[i]));
          }
          dashTwo.loggerIG._endWebservice(InstagramAPI.recentMediaEp, 'today');
        },
        error: function(data) {
          console.log('error');
        }
      });
    }

  }

  DashTwo.prototype.template = {

    _imgThumbnail: function(data) {
      var timelineHtml = "";
      // console.log(data.images.thumbnail.url);
      timelineHtml += '<div class=\"img-cont\">';
      timelineHtml += '<img class="" src=\"' + data.images.standard_resolution.url + '\">';
      timelineHtml += '</div>';
      return timelineHtml;
    }

  }

  // TODO MODULARIZE ALL PROTO

  DashTwo.prototype.start = {

    _init: function() {
      dashTwo.webservice._getMostRecentMedia();
    }

  } //End CodeEditor

  // Globalise!!
  // =======================
  window.dashTwo = new DashTwo();

  // Start plugin on Document Load
  // =============================
  $(document).ready(function() {
    dashTwo.start._init(dashTwo);
    $('#landing').parallax({effect : 'default'});
    $('#landing').paraBlurrr();
    // $('.jumbo-text').parallax({effect : 'default'});

  })

  $(document).on('click', '[data-toggle^=load-more-images]', function(e) {
    console.log(InstagramAPI.lastMediaId);
    dashTwo.webservice._getRecentMediaById(InstagramAPI.nextUrl);
  })

}(window.jQuery);


  // Avoid `console` errors in browsers that lack a console.
  (function() {
      var method;
      var noop = function () {};
      var methods = [
          'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
          'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
          'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
          'timeStamp', 'trace', 'warn'
      ];
      var length = methods.length;
      var console = (window.console = window.console || {});

      while (length--) {
          method = methods[length];

          // Only stub undefined methods.
          if (!console[method]) {
              console[method] = noop;
          }
      }
  }());

  // Place any jQuery/helper plugins in here.


  WebFontConfig = {
    google: { families: [ 'Capriola::latin' ] }
  };
  
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();
  
  


