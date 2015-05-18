LendingStar = window.LendingStar || {};
LendingStar.data = LendingStar.data || {};

LendingStar.data.static = {

  init: function () {
    this.initImageSlider();
    this.initYoutube();
  },

  initYoutube: function() {
    var self = this,
      hiw = $('#how-it-works'),
      youtubeVideo = $('.yt-video'),
      hideBlock = $('.yt-hide'),
      loginBlock = $('.login-form'),
      recoverBlock = $('.password-recovery'),
      signUpBlock = $('.sign-up'),
      mainContainer = $('#how-it-works .container');

    hiw.on('click', function(e) {
      e.stopPropagation();

      $('html, body').stop().animate({
        'scrollTop': hiw.offset().top
      }, 900, 'swing', function() {
        window.location.hash = '#how-it-works';
      });


      if ($('.login-block').css('display') == "block") {
        loginBlock.fadeOut();
        recoverBlock.fadeOut();
        signUpBlock.fadeOut();
      }

      if (!hiw.hasClass('vopened')) {
        hiw.addClass('vopened');
        var wh = $(window).height();
        hiw.addClass('yt-nobg');

        var topMenu = $('.main-menu');
        topMenu.fadeOut();

        hideBlock.fadeOut(function() {

          mainContainer.animate({
            "height": wh,
            "width": '100%',
            "max-width": '100%'
          });
          v = $('<iframe frameborder="0" height="' + wh + '" width="100%" allowfullscreen="" src="http://www.youtube.com/embed/7yoYo1sZeOM?wmode=opaque&autoplay=1&showinfo=0&controls=0" class="ytv" ></iframe><a href="#" class="stn-ico close-ico close-video"></a>');

          youtubeVideo.html(v).fadeIn(function() {
            var vid = $('.ytv'),
              closeBut = $('.close-video');
            hiw.removeClass('vopened');
            closeBut.fadeIn(function() {

              $('.close-video').on("click", function(e) {
                e.preventDefault();
                e.stopPropagation();
                youtubeVideo.html('');
                vid.removeAttr("autoplay").removeAttr("src").html('');
                mainContainer.animate({
                  "height": '609',
                  "width": '960',
                  "max-width": '960'
                }, function() {
                  hideBlock.fadeIn();
                  hiw.removeClass('yt-nobg');
                  topMenu.fadeIn();
                });

              });
            });
          });
        });
      }
    });
  },


  initImageSlider: function () {
    $("#image-slider .effectContainer").fadeTransition({
      pauseTime: 5000,
      transitionTime: 500,
      delayStart: 0,
      pauseOnMouseOver: true,
      createNavButtons: true
    });
  }
};

$(function () {
  LendingStar.data.static.init();
});
