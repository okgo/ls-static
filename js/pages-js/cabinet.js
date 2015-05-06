LendingStar = window.LendingStar || {};
LendingStar.data = LendingStar.data || {};

LendingStar.data.cabinet = {

  init: function () {
    this.initUserMenus();
    this.initNotificationsFilter();
    this.initMessagesFilter();
    this.initMarkMessages();
    this.initTransactionDetailsFiltering();
    this.initMyAccountCustomSelect();
    this.initBorrowerChart();
    this.initInvestorChart();
    this.initBorrowerProgress();
    this.initInvestorProgress();
    this.initInvestorWatchList();
    this.initInvestorWishList();
    this.initProjectsOnLoadProgressBar();
    this.initProjectOpenSlide();
    this.initBorrowerCreditScore();
    this.initUserGamificationFirstScreen();
    this.initRangeSliders();
    this.initFiltersListUserActions();
    this.initProjectAssetsInvested();
    this.initProjectAssetsReturned();
    this.initBankDetailsActionTooltip();
    this.initBankDetailsMultiSelect();
  },

  initUserMenus: function () {

    var button1 = $("#toogle-user-menu"),
      button2 = $("#open-quick-panel"),
      menuLeft = document.getElementById("user-main-menu"),
      menuRight = document.getElementById("user-quick-panel"),
      slidingBtn = $(".main-nav-item.submenu"),
      ccardBtn = $(".ccard");

    ccardBtn.on("click", function () {
      $(this).closest(".cr-card-list").find("a.ccard").removeClass("selected");
      $(this).addClass("selected");
    });

    $("#user-main-menu, #user-quick-panel").customScrollbar({
      skin: "modern-skin",
      hScroll: false,
      updateOnWindowResize: true
    });

    button1.on("click", function () {

      classie.toggle(this, 'active');
      classie.toggle(menuLeft, 'cbp-spmenu-open');

    });

    button2.on("click", function () {
      classie.toggle(this, 'active');
      classie.toggle(menuRight, 'cbp-spmenu-open');
    });

    slidingBtn.on("click", function (e) {
      e.preventDefault();
      var $cont = $(this).parent("li.submenu-availble");
      if ($cont.hasClass("opened")) {
        $cont.removeClass("opened");
        $cont.find(".user-submenu").slideUp(function () {
          $("#user-main-menu").customScrollbar("resize", true);
        });

      } else {
        $cont.addClass("opened");
        $cont.find(".user-submenu").slideDown(function () {
          $("#user-main-menu").customScrollbar("resize", true);
        });
      }

    });

    //init payment switching tabs
    $("#payment-switcher").tabs();
  },

  initNotificationsFilter: function () {
    var filterBtn = $(".not-filter a"),
      $container = $(".not-filter"),
      sortBtn = $("a.sort-notifications");

    filterBtn.on("click", function (e) {
      e.preventDefault();
      $(this).closest($container).find("a").removeClass("selected");
      $(this).addClass("selected");
    });

    sortBtn.on("click", function (e) {
      e.preventDefault();
      if ($(this).hasClass("down")) {
        $(this).removeClass("down").addClass("up");
      } else {
        $(this).removeClass("up").addClass("down");
      }
    });
  },

  initMessagesFilter: function () {
    var filterBtn = $(".messages-filter a"),
      $container = $(".messages-filter"),
      sortBtn = $("a.sort-messages");

    filterBtn.on("click", function (e) {
      e.preventDefault();
      $(this).closest($container).find("a").removeClass("selected");
      $(this).addClass("selected");
    });

    sortBtn.on("click", function (e) {
      e.preventDefault();
      if ($(this).hasClass("down")) {
        $(this).removeClass("down").addClass("up");
      } else {
        $(this).removeClass("up").addClass("down");
      }
    });
  },

  initMarkMessages: function () {
    var button = $(".message-row span.ico"),
      selectAllBtn = $("#markall-btn"),
      item = $(".message-row .item"),
      slideUpBtn = $(".send-message .cancel");

    item.on("click", function (e) {
      e.preventDefault();
      var $cont = $(this).parent(".message-row");
      if ($cont.hasClass("opened")) {
        $cont.find(".message-full-body").slideDown();
      } else {
        $(".message-full-body").slideUp();
        $(this).closest(".messagesList").find(".message-row").removeClass("opened");
        $cont.addClass("opened");
        $cont.find(".message-full-body").slideDown();
      }


    });

    slideUpBtn.on("click", function (e) {
      e.preventDefault();
      $(this).closest(".message-row").removeClass("opened");
      $(this).closest(".message-full-body").slideUp();
    })

    button.on("click", function (e) {
      e.preventDefault();
      var $cont = $(this).parent();
      if ($cont.hasClass("marked")) {
        $cont.removeClass("marked");
      } else {
        $cont.addClass("marked");
      }
    });

    selectAllBtn.on("click", function (e) {
      e.preventDefault();
      if ($(this).hasClass("marked")) {
        $(this).removeClass("marked");
        $(this).closest(".messages-tableContainer").find(".message-row").removeClass("marked");
      } else {
        $(this).addClass("marked");
        $(this).closest(".messages-tableContainer").find(".message-row").addClass("marked");
      }
    });
  },

  initTransactionDetailsFiltering: function () {
    var $slider = $("#payment-amount-slider"),
      $cont = $("#range-picker");

    $slider.slider({
      range: true,
      min: 0,
      max: 1000,
      step: 50,
      values: [0, 1000],
      slide: function (event, ui) {
        $slider.find(".ui-slider-handle:eq(0)").text(ui.values[0]);
        $slider.find(".ui-slider-handle:eq(1)").text(ui.values[1]);
      }
    });

    $slider.find(".ui-slider-handle:eq(0)").text($slider.slider("values", 0));
    $slider.find(".ui-slider-handle:eq(1)").text($slider.slider("values", 1));

    $cont.datepick({
      rangeSelect: true
    });
  },

  initMyAccountCustomSelect: function () {
    var container = $(".custom-select-white");
    container.selectmenu({
      appendTo: ".chart-controls-container",
      width: 221,
      open: function (event, ui) {
        $(".ui-selectmenu-menu").customScrollbar({
          skin: "modern-skin",
          hScroll: false
        });
      }
    });
  },

  initBorrowerChart: function () {

    if (document.getElementById("borrower-chart") === null) {
      return false;
    }

    var data = {
      labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8"],
      datasets: [
        {
          label: "Funding chart",
          fillColor: "rgba(217,216,207,1)",
          strokeColor: "rgba(217,216,207,1)",
          pointColor: "rgba(151,187,205,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(151,187,205,1)",
          data: [3, 3, 2, 5, 4, 3, 2, 3, 3]
                },
        {
          label: "Rtg chart",
          fillColor: "transparent",
          strokeColor: "rgba(234,102,58,1)",
          pointColor: "rgba(220,220,220,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: [2, 2, 4, 5, 7, 6, 4, 6, 6],
                }
            ]
    };

    var ctx = $("#borrower-chart").get(0).getContext("2d");
    var myLineChart = new Chart(ctx).Line(data, {
      responsive: false,
      showScale: false,
      maintainAspectRatio: true,
      scaleBeginAtZero: true,
      bezierCurve: false,
      pointDot: false,
      datasetStrokeWidth: 1
    });

  },

  initInvestorChart: function () {

    if (document.getElementById("investor-chart") === null) {
      return false;
    }

    var data = {
      labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8"],
      datasets: [
        {
          label: "Income chart",
          fillColor: "rgba(217,216,207,1)",
          strokeColor: "rgba(217,216,207,1)",
          pointColor: "rgba(151,187,205,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(151,187,205,1)",
          data: [1, 1, 2, 5, 4, 3, 2, 3, 3]
                },
        {
          label: "Projects chart",
          fillColor: "transparent",
          strokeColor: "rgba(234,102,58,1)",
          pointColor: "rgba(220,220,220,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: [2, 2, 3, 1, 5, 7, 4, 6, 6],
                }
            ]
    };

    var ctx = $("#investor-chart").get(0).getContext("2d");
    var myLineChart = new Chart(ctx).Line(data, {
      responsive: false,
      showScale: false,
      maintainAspectRatio: true,
      scaleBeginAtZero: true,
      bezierCurve: false,
      pointDot: false,
      datasetStrokeWidth: 1
    });

  },

  initBorrowerProgress: function () {

    $("#progress-per-funded, #progress-per-days").each(function () {
      var $this = $(this),
        progressWh = $this.width();
      $this.width("0");
      $this.animate({
        width: progressWh
      }, {
        duration: 2500,
        easing: "swing"
      });
    });
  },

  initInvestorProgress: function () {
    var container = $("#progress-per-invested");

    container.each(function () {
      var $this = $(this),
        progressWh = $this.width();
      $this.width("0");
      $this.animate({
        width: progressWh
      }, {
        duration: 2500,
        easing: "swing"
      });
    });
  },

  initInvestorWatchList: function () {
    var watchListBtn = $(".my-investments-watch-list-container .add-watch-list"),
        wishListBtn = $(".add-wish-list");

    watchListBtn.addClass("added-to-watch-list");
    watchListBtn.tooltip({
      tooltipClass: "login-tooltip",
      position: {
        my: "center bottom-10",
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

    watchListBtn.on("click", function (e) {
      e.preventDefault();

      var $this = $(this);
      $this.removeClass("added-to-watch-list");
      $this.closest("li.project").remove();
    });

    wishListBtn.tooltip({
      tooltipClass: "login-tooltip",
      position: {
        my: "center bottom-10",
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

    wishListBtn.on("click", function (e) {
      e.preventDefault();

      var $this = $(this);

      if (!$this.hasClass("added-to-wish-list")) {
        $this.addClass("added-to-wish-list");
      } else {
        $this.removeClass("added-to-wish-list");
      }
    });

  },

  initInvestorWishList: function () {
    var watchListBtn = $(".add-watch-list"),
        wishListBtn = $(".my-investments-wish-list-container .add-wish-list");

    wishListBtn.addClass("added-to-wish-list");
    wishListBtn.tooltip({
      tooltipClass: "login-tooltip",
      position: {
        my: "center bottom-10",
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

    wishListBtn.on("click", function (e) {
      e.preventDefault();

      var $this = $(this);
      $this.removeClass("added-to-watch-list");
      $this.closest("li.project").remove();
    });

    watchListBtn.tooltip({
      tooltipClass: "login-tooltip",
      position: {
        my: "center bottom-10",
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

    watchListBtn.on("click", function (e) {
      e.preventDefault();

      var $this = $(this);

      if (!$this.hasClass("added-to-watch-list")) {
        $this.addClass("added-to-watch-list");
      } else {
        $this.removeClass("added-to-watch-list");
      }
    });

  },

  initProjectsOnLoadProgressBar: function () {
    $(".pr-progress-bar").each(function () {
      var $this = $(this),
        progressWh = $this.width();
      $this.width("0");
      $this.animate({
        width: progressWh
      }, {
        duration: 2500,
        easing: "swing"
      });
    });
  },

  initProjectOpenSlide: function () {

    var tipBtn = $(".make-offer-btn"),
      investCartBtn = $(".add-to-invest-cart"),
      button = $(".all-projects-list a.row"),
      closeBtn = $("a.projects-arrow-up");

    button.on("click", function (e) {
      e.preventDefault();
      var $this = $(this);

      $this.closest(".all-projects-list").find("li").removeClass("opened");
      $this.parent("li").addClass("opened");
      $this.parent("li.opened").find(".pr-full-data").slideDown();
    });

    closeBtn.on("click", function (e) {
      e.preventDefault();
      var $this = $(this);

      $this.parent(".pr-full-data").slideUp();
      $this.closest("li.opened").removeClass("opened");
    });

    investCartBtn.on("click", function (e) {
      e.preventDefault();
      var $this = $(this);

      if (!$this.hasClass("added-to-invest-cart")) {
        $this.addClass("added-to-invest-cart");
        $this.text("Added to invest cart");
      } else {
        $this.removeClass("added-to-invest-cart");
        $this.text("Add to invest cart");
      }

    });

    tipBtn.tooltip({
      tooltipClass: "login-tooltip",
      position: {
        my: "center bottom-10",
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

  initBorrowerCreditScore: function () {
    var container = $(".score-progress");

    container.each(function () {
      var $this = $(this),
        progressWh = $this.width();
      $this.width("0");
      $this.animate({
        width: progressWh
      }, {
        duration: 2500,
        easing: "swing"
      });
    });
  },

  initUserGamificationFirstScreen: function() {
    var item = $(".calendarDay.active"),
        container = $(".daysList"),
        itemWidth = $(".calendarDay").width() + 50,
        centerIndex = $(".calendarDay.today").index();


    item.on("click", function(e){
      e.preventDefault();
      var thisIndex = $(this).index(),
          leftPosition = (centerIndex - thisIndex) * itemWidth;
      container.animate({
        "left": leftPosition + "px"
      }, 300);
      $(this).closest(container).find(".today").removeClass("today");
      $(this).addClass("today");
    })
  },

  initSlider: function ($container, params) {

    var config = {
      range: true,
      min: params.min,
      max: params.max,
      values: params.values,
      slide: function (event, ui) {
        $container.find(".ui-slider-handle:eq(0)").text(ui.values[0]);
        $container.find(".ui-slider-handle:eq(1)").text(ui.values[1]);
      }
    };
    if (params.step) {
      config.step = params.step;
    }
    $container.slider(config);
    $container.find(".ui-slider-handle:eq(0)").text($container.slider("values", 0));
    $container.find(".ui-slider-handle:eq(1)").text($container.slider("values", 1));

  },

  initRangeSliders: function () {

    this.initSlider($("#borrower-range"), {
      min: 21,
      max: 60,
      values: [25, 40]
    });

    this.initSlider($("#loan-value-range"), {
      min: 0,
      max: 12000,
      step: 50,
      values: [0, 3000]
    });

    this.initSlider($("#rate-range"), {
      min: 0,
      max: 100,
      values: [0, 100]
    });

    this.initSlider($("#loan-terms-range"), {
      min: 0,
      max: 36,
      values: [1, 36]
    });

    var $bigSlider = $("#rating-scale"),
      sliderWidth = $bigSlider.width(),
      min = -300,
      max = 300;

    $bigSlider.slider({
      range: true,
      min: min,
      max: max,
      step: 50,
      values: [-300, 100],
      slide: function (event, ui) {
        var bgLeft = (min - ui.values[0]) * (sliderWidth / (max - min));
        $bigSlider.find(".ui-slider-range").css({
          "background-position": bgLeft + "px 0px"
        });
      }
    });
  },

  initFiltersListUserActions: function(){
    var tipBtn = $(".user-actions a"),
        removeBtn = $(".user-actions a.remove-filter"),
        ppBtn = $(".user-actions a.autoinvesting"),
        filterBtn = $(".filters-row a.item"),
        filteringBtn = $(".filters-filter a"),
        $container = $(".filters-filter");

    tipBtn.tooltip({
      tooltipClass: "login-tooltip",
      position: {
        my: "center bottom-15",
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

    removeBtn.on("click", function(e){
      e.preventDefault();
      $(this).closest(".filters-row").remove();
    });

    ppBtn.on("click", function(e){
      e.preventDefault();
      if($(this).hasClass("playing")){
        $(this)
        .attr("title", "Restore Investment")
        .removeClass("playing")
        .addClass("paused");
      } else{
        $(this)
         .attr("title", "Suspend Investment")
        .removeClass("paused")
        .addClass("playing");
      }
    });

    filterBtn.on("click", function(e){
      e.preventDefault();
      if($(this).hasClass("active")){
        $(this).removeClass("active");
        $(this).closest(".filters-row").find(".filter-details").slideUp();
      }else{
        $(this).addClass("active");
        $(this).closest(".filters-row").find(".filter-details").slideDown();
      }
    });

    filteringBtn.on("click", function (e) {
      e.preventDefault();
      $(this).closest($container).find("a").removeClass("selected");
      $(this).addClass("selected");
    });

  },

  initProjectAssetsInvested: function() {
  if ($("#project-assets-invested").length > 0) {
    var self = this,
      strip1 = 700,
      strip2 = 300;


    var doughnutData = [{
      value: strip1,
      color: "#ea6336"
    }, {
      value: strip2,
      color: "#efefef"
    }];

    var ctx = document.getElementById("project-assets-invested").getContext("2d");
    window.myDoughnut = new Chart(ctx).Doughnut(doughnutData, {
      showTooltips: false,
      scaleShowLabels: false,
      // responsive: true,
      segmentShowStroke: true,
      segmentStrokeColor: "#efefef",
      segmentStrokeWidth: 0,
      percentageInnerCutout: 60
    });
  }
},

  initProjectAssetsReturned: function() {
    if ($("#project-assets-returned").length > 0) {
      var self = this,
        strip1 = 500,
        strip2 = 500;


      var doughnutData = [{
        value: strip1,
        color: "#6dc876"
      }, {
        value: strip2,
        color: "transparent"
      }];

      var ctx = document.getElementById("project-assets-returned").getContext("2d");
      window.myDoughnut = new Chart(ctx).Doughnut(doughnutData, {
        showTooltips: false,
        scaleShowLabels: false,
        // responsive: true,
        segmentShowStroke: true,
        segmentStrokeColor: "transparent",
        segmentStrokeWidth: 0,
        percentageInnerCutout: 55
      });
    }
  },

  initBankDetailsActionTooltip: function() {
    var tipBtn = $(".bank-account-actions a");

    tipBtn.tooltip({
      tooltipClass: "login-tooltip",
      position: {
        my: "center bottom-15",
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

  initBankDetailsMultiSelect: function() {
    $(".custom-multiselect select").multiselect(); //for borrower

    var container = $(".regular-payment-select select");
    container.selectmenu({
      appendTo: ".regular-payment-select",
      open: function (event, ui) {
        $(".ui-selectmenu-menu").customScrollbar({
          skin: "modern-skin",
          hScroll: false
        });
      }
    });
  }

};

$(function () {
  LendingStar.data.cabinet.init();
});
