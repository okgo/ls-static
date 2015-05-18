LendingStar = window.LendingStar || {};
LendingStar.data = LendingStar.data || {};

LendingStar.data.base = {

  init: function () {
    this.initUserFallOutMenu();
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
