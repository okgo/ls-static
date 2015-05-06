LendingStar = window.LendingStar || {};
LendingStar.data = LendingStar.data || {};

LendingStar.data.investorcabinet = {

  init: function () {
    this.initInvestorReinvesting();
  },

  initInvestorReinvesting: function () {
    var
      select1 = $(".choose-preferences select");

    select1.selectmenu({
      appendTo: ".choose-preferences",
      open: function (event, ui) {
        $(".ui-selectmenu-menu").customScrollbar({
          skin: "modern-skin",
          hScroll: false
        });
      }
    });

    // $( ".radio-btn-container" ).buttonset();

  }

};

$(function () {
  LendingStar.data.investorcabinet.init();
});
