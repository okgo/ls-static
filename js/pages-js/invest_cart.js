LendingStar = window.LendingStar || {};
LendingStar.data = LendingStar.data || {};

LendingStar.data.investCart = {

  init: function() {
    this.initInvestCartChart();
  },

  initInvestCartChart: function() {
    if ($("#invest-cart-invested-chart").length > 0) {
      var self = this,
      strip1 = 600,
      strip2 = 400;


      var doughnutData = [{
        value: strip1,
        color: "#ea6336"
      }, {
        value: strip2,
        color: "transparent"
      }];

      var ctx = document.getElementById("invest-cart-invested-chart").getContext("2d");
      window.myDoughnut = new Chart(ctx).Doughnut(doughnutData, {
        showTooltips: false,
        scaleShowLabels: false,
        segmentShowStroke: true,
        segmentStrokeColor: "transparent",
        segmentStrokeWidth: 0,
        percentageInnerCutout: 55
      });
    }
  }

};

$(function() {
  LendingStar.data.investCart.init();
});
