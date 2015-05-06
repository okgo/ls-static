LendingStar = window.LendingStar || {};
LendingStar.data = LendingStar.data || {};

LendingStar.data.static = {

  init: function () {

    this.initImageSlider();

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
