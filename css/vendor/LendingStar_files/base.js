LendingStar = window.LendingStar || {};
LendingStar.data = LendingStar.data || {};

LendingStar.data.base = {

  init: function () {
    this.initScrollingToSectionsBottom();
    this.initSignInForm();
    this.initCustomUiElem();
    this.initSubmitLogForm();
    this.initUserFallOutMenu();
  },

  initScrollingToSectionsBottom: function () {

    $('.slide-up a[href^="#"]').on('click', function (e) {
      e.preventDefault();
      var target = this.hash,
        $target = $(target);
      $('html, body').stop().animate({
        'scrollTop': $target.offset().top
      }, 900, 'swing', function () {
        window.location.hash = target;
      });
    });
  },

  initSignInForm: function () {
    var self = this,
      loginLink = $(".user-lg a.login-form-link"),
      joinUsLink = $(".user-ju a.login-form-link"),
      loginBlock = $(".user-login-form-container"),
      tipBtn = $(".pass-recover"),
      closeFormLink = $("#hide-login-form"),
      investCart = $(".invest-list");

    joinUsLink.on("click", function () {
      var linksContainer = $(this).closest(".user-lg-ju");

      linksContainer.find("li").removeClass("active");
      $(this).parent("li").addClass("active");
      loginBlock.fadeOut();
    });

    loginLink.on('click', function (e) {

      e.preventDefault();
      var linksContainer = $(this).closest(".user-lg-ju");

      investCart.fadeOut(50);
      linksContainer.find("li").removeClass("active");
      $(this).parent("li").addClass("active");

      setTimeout(function () {
        loginBlock.fadeIn();
      }, 50);


      setTimeout(function () {
        $("#user-login").focus();
      }, 1000);

    });

    closeFormLink.on("click", function (e) {
      e.preventDefault();
      $(this).parent(loginBlock).fadeOut();
      $(this).closest(".user-lg-ju").find(".user-lg").removeClass("active");
      $(this).closest(".user-lg-ju").find(".user-ju").addClass("active");

      setTimeout(function () {
        investCart.fadeIn();
      }, 500);
    });

    tipBtn.tooltip({
      tooltipClass: "login-tooltip",
      position: {
        my: "center bottom-20",
        at: "center top",
        using: function (position, feedback) {
          $(this).css(position);
          $("<div>")
            .addClass("login-tooltip-arrow")
            .addClass(feedback.vertical)
            .addClass(feedback.horizontal)
            .appendTo(this);
        }
      }
    });

  },

  initCustomUiElem: function () {
    var
      customSelect = $(".custom-select"),
      customSelectWhite = $(".custom-white-select select");

    customSelect.selectmenu({
      appendTo: ".custom-slct",
      width: 382,
      open: function (event, ui) {
        $(".ui-selectmenu-menu").customScrollbar({
          skin: "modern-skin",
          hScroll: false
        });
      }
    });

    customSelectWhite.selectmenu({
      appendTo: ".custom-white-select",
      open: function (event, ui) {
        $(".ui-selectmenu-menu").customScrollbar({
          skin: "modern-skin",
          hScroll: false
        });
      }
    });

    $(".custom-checkbox, .custom-checkbox2, .custom-radio, .custom-radio2, .custom-radio3").buttonset();
  },

  initSubmitLogForm: function () {
    $(".user-login-form").keydown(function (e) {
      if (e.which == 13 && $("#user-pass").is(":focus")) {
        $(".user-login-form").submit();
      }
    });
  },

  initUserFallOutMenu: function () {
    var button = $(".user-name-menu"),
      notBtn = $(".user-not");

    button.hover(
      function () {
        $(this).addClass("hovered");
        $(this).closest(".user-name-menu").find(".user-fallout-menu").fadeIn();
      },
      function () {
        $(this).removeClass("hovered");
        $(this).closest(".user-name-menu").find(".user-fallout-menu").fadeOut();
      }
    );

    notBtn.on("click", function (e) {
      e.preventDefault();
      var $cont = $(this).parent("li.item");

      if ($cont.hasClass("visible")) {
        $cont.removeClass("visible");
        $cont.find(".notificatin-menu").fadeOut();
      } else {
        $cont.addClass("visible");
        $cont.find(".notificatin-menu").fadeIn();
      }
    });
  }

};

$(function () {
  LendingStar.data.base.init();
});
