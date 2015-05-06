LendingStar = window.LendingStar || {};
LendingStar.data = LendingStar.data || {};

LendingStar.data.borrowercabinet = {

  init: function () {
    this.initBorrowerFilesSorting();
    this.initBorrrowerNewPrRangeSliders();
    this.initBorrowerNewPrDescription();
  },

  initBorrowerFilesSorting: function () {
    var
      sortBtn = $("a.sort-by-name");

    sortBtn.on("click", function (e) {
      e.preventDefault();
      if ($(this).hasClass("down")) {
        $(this).removeClass("down").addClass("up");
      } else {
        $(this).removeClass("up").addClass("down");
      }
    });

  },

  initBorrrowerNewPrRangeSliders: function() {
    $("#loan-amount-slider").slider({
        range: "max",
        min: 0,
        max: 10000,
        value: 2500,
        slide: function(event, ui) {
          $("#loan-amount-txt").val(ui.value);
        }
    });

    $("#loan-amount-txt").val($("#loan-amount-slider").slider("value"));

    $("#loan-term-slider").slider({
        range: "max",
        min: 1,
        max: 48,
        value: 24,
        slide: function(event, ui) {
          $("#loan-term-txt").val(ui.value);
        }
    });

    $("#loan-term-txt").val($("#loan-term-slider").slider("value"));
  },

  initBorrowerNewPrDescription: function() {
    $('#chart-cont').keyup(function(){
      var charsno = $(this).val().length;
      $('#chart-num').html(charsno + "/250");
    });
  }

};

$(function () {
  LendingStar.data.borrowercabinet.init();
});
