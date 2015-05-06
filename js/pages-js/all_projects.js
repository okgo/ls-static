LendingStar = window.LendingStar || {};
LendingStar.data = LendingStar.data || {};

LendingStar.data.allprojects = {

  init: function () {
    this.initProjectsOnLoadProgressBar();
    this.initAddToWatchList();
    this.initAddToWishList();
    this.initProjectsSorting();
    this.initRangeSliders();
    this.initFilterSliding();
    this.initProjectOpenSlide();
    this.initProjectSlider();
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

  initAddToWatchList: function () {
    var button = $(".add-watch-list");

    button.tooltip({
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

    button.on("click", function (e) {
      e.preventDefault();

      var $this = $(this);

      if (!$this.hasClass("added-to-watch-list")) {
        $this.addClass("added-to-watch-list");
      } else {
        $this.removeClass("added-to-watch-list");
      }
    });
  },

  initAddToWishList: function () {
    var button = $(".add-wish-list");

    button.tooltip({
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

    button.on("click", function (e) {
      e.preventDefault();

      var $this = $(this);

      if (!$this.hasClass("added-to-wish-list")) {
        $this.addClass("added-to-wish-list");
      } else {
        $this.removeClass("added-to-wish-list");
      }
    });
  },

  initProjectsSorting: function () {
    var button = $(".pr-sorting .item a");

    button.tooltip({
      tooltipClass: "custom-sorting-tooltip",
      position: {
        my: "center bottom-5",
        at: "center top",
        using: function (position, feedback) {
          $(this).css(position);
          $("<div>")
            .addClass("tooltip-arrow")
            .addClass(feedback.vertical)
            .addClass(feedback.horizontal)
            .appendTo(this);
        }
      }
    });

    button.on("click", function (e) {
      e.preventDefault();
      var $this = $(this);

      if ($this.hasClass("active")) {
        if ($this.hasClass("active-top")) {
          $this.removeClass('active-top');
        } else {
          $this.addClass('active-top');
        }
      } else {
        $this.closest(".pr-sorting").find("a.active").removeClass("active active-top");
        $this.addClass('active');
      }
    });
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

  initFilterSliding: function () {
    var tipBtn = $(".save-filter"),
      button = $(".add-filter-btn .add-filters");

    tipBtn.tooltip({
      tooltipClass: "save-filter-tooltip",
      position: {
        my: "center bottom-10",
        at: "center top",
        using: function (position, feedback) {
          $(this).css(position);
          $("<div>")
            .addClass("tip-arrow")
            .addClass(feedback.vertical)
            .addClass(feedback.horizontal)
            .appendTo(this);
        }
      }
    });

    button.on("click", function (e) {
      e.preventDefault();
      $(this).toggleClass("active");
      $(this).closest(".projects-filter-container").find("#pr-filter").animate({
        height: "toggle"
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

  initProjectSlider: function(){

    if (document.getElementById("pr-slider") === null) {
      return false;
    }

    $("#pr-slider").lightSlider({
      gallery:true,
      item: 1,
      thumbItem: 4,
      slideMargin: 0,
      speed:500,
      auto: false,
      loop: false
    });
  }

};

$(function () {
  LendingStar.data.allprojects.init();
});
