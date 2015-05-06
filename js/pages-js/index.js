LendingStar = window.LendingStar || {};
LendingStar.data = LendingStar.data || {};

LendingStar.data.index = {

  stepTitleBorrower: "",
  stepTitleBorrower2: "",
  stepTitleInvestor: "",
  stepTitleInvestor2: "",
  resultBorrower1: "",
  resultBorrower2: "",
  resultBorrower3: "",
  resultBorrower4: "",
  resultBorrowerScore: "",
  resultInvestor1: "",
  resultInvestor2: "",
  resultInvestor3: "",
  resultInvestor4: "",
  addedToWishList: "",
  addedToWatchList: "",
  messageFormError: "",

  init: function() {
    this.initHeaderHeight();
    this.initSearchFormSelects();
    this.initVideoControls();
    // this.initLangDropDown();
    this.initCustomScrollbar();
    this.initTopPanelScroll();
    this.initScrollingToSections();
    this.initYoutube();
    this.initCalcTabsChoice();
    this.initProjectListSignIn();
    this.initAddToInvestList();
    this.initFeedbackSlider();
    this.initPressSlider();
    this.initAddToWishList();
    this.initAddToWatchList();
    this.initMessageForm();

  },

  initHeaderHeight: function() {
    var self = this,
      wh = $(window).height(),
      header = $('.index-header'),

      sliderContainer = $('.text-slider'),
      sliderItem = $('.text-slider .item'),
      videoOverlay = $('.video-overlay'),
      posrel = $('.posrel'),
      menuHeight = $('.main-menu').height(),
      headerHeight = wh - menuHeight;

    header.css({
      'height': headerHeight
    });
    sliderContainer.css({
      'height': headerHeight
    });
    sliderItem.css({
      'height': headerHeight
    });
    posrel.css({
      'height': headerHeight
    });
    videoOverlay.css({
      'height': headerHeight
    });


    $(window).on('resize', function() {
      wh = $(window).height(),
        header = $('.index-header'),
        menuHeight = $('.main-menu').height(),
        sliderContainer = $('.text-slider'),
        sliderItem = $('.text-slider .item'),
        videoOverlay = $('.video-overlay'),
        posrel = $('.posrel'),
        headerHeight = wh - menuHeight;

      header.css({
        'height': headerHeight
      });
      sliderContainer.css({
        'height': headerHeight
      });
      sliderItem.css({
        'height': headerHeight
      });
      posrel.css({
        'height': headerHeight
      });
      videoOverlay.css({
        'height': headerHeight
      });
    });
  },

  // initLangDropDown: function() {
  //   var self = this,
  //     button = $(".lang-header span"),
  //     input = $('.lang-header input'),
  //     countryLi = $('.lang-container li a'),
  //     langHeader = $('.lang-header'),
  //     langBlock = $('.lang'),
  //     langScroll = $('.lang-container');
  //
  //   var availableTags = [{
  //     label: "Malaysia",
  //     value: "Malaysia"
  //   }, {
  //     label: "Ukraine",
  //     value: "Ukraine"
  //   }];
  //
  //   input.autocomplete({
  //     source: availableTags
  //   });
  //   button.on('click', function() {
  //     langScroll.fadeToggle();
  //   });
  //
  //   countryLi.on('click', function(e) {
  //     e.preventDefault();
  //     var valueLang = $(this).html();
  //
  //     input.prop('value', valueLang);
  //
  //
  //     langScroll.fadeOut(function() {
  //
  //     });
  //   });
  //
  //   input.on('focus', function() {
  //     var valueInput = $(this).attr('value');
  //     input.prop('value', '');
  //     langScroll.fadeOut(function() {
  //
  //     });
  //   });
  // },

  initSearchFormSelects: function() {

    $.widget( 'app.selectmenu', $.ui.selectmenu, {
      _drawButton: function() {
          this._super();

          var selected = this.element
                  .find( '[selected]' )
                  .length,
              placeholder = this.options.placeholder;

          if ( !selected && placeholder ) {
              this.buttonText.text( placeholder );
          }
      }
    });

    var
      select1 = $(".loan-types select"),
      select2 = $(".apy-types select"),
      select3 = $(".period-types select");

    select1.selectmenu({
      appendTo: ".loan-types",
      placeholder: "Financing for",
      open: function (event, ui) {
        $(".ui-selectmenu-menu").customScrollbar({
          skin: "modern-skin",
          hScroll: false
        });
      }
    });

    select2.selectmenu({
      appendTo: ".apy-types",
      placeholder: "Annual return",
      open: function (event, ui) {
        $(".ui-selectmenu-menu").customScrollbar({
          skin: "modern-skin",
          hScroll: false
        });
      }
    });

    select3.selectmenu({
      appendTo: ".period-types",
      placeholder: "Term",
      open: function (event, ui) {
        $(".ui-selectmenu-menu").customScrollbar({
          skin: "modern-skin",
          hScroll: false
        });
      }
    });
  },

  initVideoControls: function() {
    var
      self = this,
      controls = {
        video: $(".vid1"),
        playpause: $("#playpause")
      };
    var video = controls.video[0];
    controls.playpause.click(function(e) {
      e.preventDefault();
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
      $(this).toggleClass("paused");
    });
  },

  initTopPanelScroll: function() {
    var
      self = this,
      nav = $('.main-menu'),
      scrolled = false,
      wh = $(window).height(),
      menuHeight = nav.height(),
      headerHeight = wh - menuHeight;

    $(window).scroll(function() {
      if (wh > $(window).scrollTop() && scrolled) {
        $('.user-lg-ju').removeClass('login-form-scroll');
        nav.removeClass('scroll_menu2_fixed').attr('id', 'more');
        scrolled = false;
      }
      if (wh < $(window).scrollTop() && !scrolled) {
        $('.user-lg-ju').addClass('login-form-scroll');
        nav.addClass('scroll_menu2_fixed').removeAttr('id');
        scrolled = true;
      }
    });
  },

  initCustomScrollbar: function() {
    var
      self = this,
      langScroll = $('.lang-container');

    langScroll.customScrollbar({
      skin: "modern-skin",
      hScroll: false,
      updateOnWindowResize: false
    }).hide();
  },

  initScrollingToSections: function() {
    $('.slide-down a[href^="#"] , .pr-calc-income a[href^="#"] , .yt-hide a[href^="#"] ').on('click', function(e) {
      e.preventDefault();
      var target = this.hash,
        $target = $(target);
      $('html, body').stop().animate({
        'scrollTop': $target.offset().top
      }, 900, 'swing', function() {
        window.location.hash = target;
      });
    });
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

  initCalcTabsChoice: function() {
    var self = this,
      calcTabMain = $('.calc-tab-h a'),
      borrowerRecalculate = $('.borrower-change-data a'),
      calcPanel = $('#calc');

    $('.borrower-charts').addClass('active-tab-h');

    calcPanel.addClass('borrower-tab-panel');

    if ($('.borrower-charts').hasClass('active-tab-h') && calcPanel.hasClass('borrower-tab-panel')) {
      self.initCalcTabs();
    }

    borrowerRecalculate.on('click', function(e) {
      e.preventDefault();
      $('.borrower-tab .calc-step-tab').hide();
      $('.investor-tab .calc-step-tab-investor').hide();
      if ($('.borrower-charts').hasClass('active-tab-h')) {
        $('.investor-tab').fadeOut(function() {
          $('.borrower-tab').fadeIn(function() {
            $('.step-rate').html(self.stepTitleBorrower);
            $('.step-rate2').html(self.stepTitleBorrower2);
            self.initCalcTabs();
          });
        });
      }
    });

    calcTabMain.on('click', function(e) {
      e.preventDefault();
      calcTabMain.addClass('active-tab-h').not(this).removeClass('active-tab-h', function() {
        $('.borrower-tab .calc-step-tab').hide();
        $('.investor-tab .calc-step-tab-investor').hide();
        if ($('.borrower-charts').hasClass('active-tab-h')) {
          calcPanel.addClass('borrower-tab-panel').removeClass('investor-tab-panel');
          $('.investor-tab').fadeOut(function() {
            $('.borrower-tab').fadeIn(function() {
              $('.step-rate').html(self.stepTitleBorrower);
              $('.step-rate2').html(self.stepTitleBorrower2);
              self.initCalcTabs();
            });
          });
        } else {
          calcPanel.removeClass('borrower-tab-panel').addClass('investor-tab-panel');
          $('.borrower-tab').fadeOut(function() {
            $('.investor-tab').fadeIn(function() {
              $('.step-rate').html(self.stepTitleInvestor);
              $('.step-rate2').html(self.stepTitleInvestor2);
              self.initCalcTabsInvestor();
            });
          });
        }
      });
    });
  },

  initCalcTabs: function() {
    var self = this,
      stepBg = $('.borrower-tab-panel .step-strip'),
      calcButPrev = $('.borrower-tab .calc-prev'),
      calcButNext = $('.borrower-tab .calc-next , .borrower-tab .calculate'),
      tabItem = $('.borrower-tab .calc-step-tab'),
      forward = 0,
      backward = 1;

    tabItem.each(function(count) {
      $(this).attr('data-number', (count + 1));
    });
    tabItem.removeClass('tab-active').hide();
    $('.borrower-tab .calc-step-tab:first').addClass('tab-active').fadeIn(function() {
      stepBg.removeAttr('class').addClass('step-strip cf step1-bg');
      self.initSliderUi();
      self.initCircleCharts();
    });

    calcButPrev.on('click', function(e) {
      e.preventDefault();
      self.initCalcTabsAuto(forward, backward);
    });

    calcButNext.on('click', function(e) {
      e.preventDefault();
      self.initCalcTabsAuto(backward, forward);
    });
  },

  initCalcTabsAuto: function(forward, backward) {
    var self = this,
      countDataNext,
      stepBg = $('.borrower-tab-panel .step-strip'),
      tabItem = $('.borrower-tab .calc-step-tab'),
      textActive = $('.tab-active'),
      textItemsCount = tabItem.length,
      countDataC = parseInt(textActive.data('number'));

    if (tabItem.hasClass('tab-active') && (countDataC <= textItemsCount)) {
      countDataNext = countDataC + forward - backward;
      if (countDataNext == 0) {
        textActive.removeClass('tab-active');
        textActive.fadeOut('900', function() {
          $('.borrower-tab .calc-step-tab[data-number="' + $(tabItem[textItemsCount - 1]).data('number') + '"]').fadeIn('900').addClass('tab-active', function() {
            self.initCalcTabOrder();
          });
          stepBg.removeAttr('class').addClass('step-strip cf step' + $(tabItem[textItemsCount - 1]).data('number') + '-bg');

        });
      } else if (countDataNext > textItemsCount) {
        textActive.removeClass('tab-active');
        textActive.fadeOut('900', function() {

          $('.borrower-tab .calc-step-tab[data-number="' + $(tabItem[0]).data('number') + '"]').fadeIn('900').addClass('tab-active', function() {
            self.initCalcTabOrder();
          });
          stepBg.removeAttr('class').addClass('step-strip cf step' + $(tabItem[0]).data('number') + '-bg');


        });
      } else if (countDataNext < parseInt($(tabItem[0]).data('number'))) {
        textActive.removeClass('tab-active');
        textActive.fadeOut('900', function() {
          $('.borrower-tab .calc-step-tab[data-number="' + countDataNext + '"]').fadeIn('900').addClass('tab-active', function() {
            self.initCalcTabOrder();
          });
          stepBg.removeAttr('class').addClass('step-strip cf step' + countDataNext + '-bg');

        });
      } else {

        textActive.removeClass('tab-active');
        textActive.fadeOut('900', function() {
          $('.borrower-tab .calc-step-tab[data-number="' + countDataNext + '"]').fadeIn('900').addClass('tab-active', function() {
            self.initCalcTabOrder();
          });
          stepBg.removeAttr('class').addClass('step-strip cf step' + countDataNext + '-bg');

        });
      }
    } else {
      if (tabItem.hasClass('tab-active')) {
        textActive.removeClass('tab-active');
        textActive.fadeOut('900', function() {
          $('.borrower-tab .calc-step-tab[data-number="' + $(tabItem[0]).data('number') + '"]').fadeIn('900').addClass('tab-active', function() {
            self.initCalcTabOrder();
          });
          stepBg.removeAttr('class').addClass('step-strip cf step' + $(tabItem[0]).data('number') + '-bg');

        });
      }
    }
  },

  initCalcTabsInvestor: function() {
    var
      self = this,
      stepBg = $('.investor-tab-panel .step-strip'),
      calcButPrev = $('.investor-tab .calc-prev'),
      calcButNext = $('.investor-tab .calc-next'),
      tabItem = $('.investor-tab .calc-step-tab-investor'),
      forward2 = 0,
      backward2 = 1;

    tabItem.each(function(counti) {
      $(this).attr('data-numinvestor', (counti + 1));
    });
    tabItem.removeClass('tab-active2').hide();
    $('.investor-tab .calc-step-tab-investor:first').addClass('tab-active2').fadeIn(function() {
      stepBg.removeAttr('class').addClass('step-strip cf step1-bg');
      self.initSliderUiInvestor();
      self.initCircleChartsInvestor();
    });
    calcButPrev.on('click', function(e) {
      e.preventDefault();
      self.initCalcTabsAutoInvestor(forward2, backward2);
    });
    calcButNext.on('click', function(e) {
      e.preventDefault();
      self.initCalcTabsAutoInvestor(backward2, forward2);
    });
  },

  initCalcTabsAutoInvestor: function(forward2, backward2) {
    var
      self = this,
      countDataNext,
      stepBg = $('.investor-tab-panel .step-strip'),
      tabItem = $('.investor-tab .calc-step-tab-investor'),
      textActive = $('.tab-active2'),
      textItemsCount = tabItem.length,
      countDataC = parseInt(textActive.data('numinvestor'));

    if (tabItem.hasClass('tab-active2') && (countDataC <= textItemsCount)) {
      countDataNext = countDataC + forward2 - backward2;
      if (countDataNext == 0) {
        textActive.removeClass('tab-active2');
        textActive.fadeOut('900', function() {
          $('.investor-tab .calc-step-tab-investor[data-numinvestor="' + $(tabItem[textItemsCount - 1]).data('numinvestor') + '"]').fadeIn('900').addClass('tab-active2', function() {
            self.initCalcTabOrderInvestor();
          });
          stepBg.removeAttr('class').addClass('step-strip cf step' + $(tabItem[textItemsCount - 1]).data('numinvestor') + '-bg');

        });
      } else if (countDataNext > textItemsCount) {
        textActive.removeClass('tab-active2');
        textActive.fadeOut('900', function() {

          $('.investor-tab .calc-step-tab-investor[data-numinvestor="' + $(tabItem[0]).data('number') + '"]').fadeIn('900').addClass('tab-active2', function() {
            self.initCalcTabOrderInvestor();
          });
          stepBg.removeAttr('class').addClass('step-strip cf step' + $(tabItem[0]).data('numinvestor') + '-bg');


        });
      } else if (countDataNext < parseInt($(tabItem[0]).data('numinvestor'))) {
        textActive.removeClass('tab-active2');
        textActive.fadeOut('900', function() {
          $('.investor-tab .calc-step-tab-investor[data-number="' + countDataNext + '"]').fadeIn('900').addClass('tab-active2', function() {
            self.initCalcTabOrderInvestor();
          });
          stepBg.removeAttr('class').addClass('step-strip cf step' + countDataNext + '-bg');

        });
      } else {

        textActive.removeClass('tab-active2');
        textActive.fadeOut('900', function() {
          $('.investor-tab .calc-step-tab-investor[data-numinvestor="' + countDataNext + '"]').fadeIn('900').addClass('tab-active2', function() {
            self.initCalcTabOrderInvestor();
          });
          stepBg.removeAttr('class').addClass('step-strip cf step' + countDataNext + '-bg');

        });
      }
    } else {
      if (tabItem.hasClass('tab-active2')) {


        textActive.removeClass('tab-active2');
        textActive.fadeOut('900', function() {
          $('.investor-tab .calc-step-tab-investor[data-numinvestor="' + $(tabItem[0]).data('numinvestor') + '"]').fadeIn('900').addClass('tab-active2', function() {
            self.initCalcTabOrderInvestor();
          });
          stepBg.removeAttr('class').addClass('step-strip cf step' + $(tabItem[0]).data('numinvestor') + '-bg');

        });
      }
    }
  },

  initCalcTabOrder: function() {
    var
      self = this,
      tabActive = $('.borrower-tab .tab-active'),
      countDataC = parseInt(tabActive.data('number'));

    if (countDataC == 1) {
      self.initSliderUi();
      self.initCircleCharts();
    } else if (countDataC == 2) {
      self.initSliderUi2();
      self.initCircleCharts2();
    } else if (countDataC == 3) {
      //            self.initSliderUi3();
      //            self.initCircleCharts3();
      self.initCircleChartsMultiple();
    } else if (countDataC == 4) {
      self.initCircleChartsMultipleFinalBorrower();
    }
  },

  initCalcTabOrderInvestor: function() {
    var self = this,
      tabActive = $('.investor-tab .tab-active2'),
      countDataC = parseInt(tabActive.data('numinvestor'));
    if (countDataC == 1) {
      self.initSliderUiInvestor();
      self.initCircleChartsInvestor();
    } else if (countDataC == 2) {
      self.initSliderUiInvestor2();
      self.initCircleChartsInvestor2();
    } else if (countDataC == 3) {
      self.initSliderUiInvestor3();
      self.initCircleChartsInvestor3();
    } else if (countDataC == 4) {
      $('.borrower-finish2').fadeOut(function() {
        $('.borrower-finish1').fadeIn();
      });
      self.initCircleChartsMultipleInvestor();
    }
  },

  initSliderUiInvestor: function() {
    var self = this,
      sliderBlock = $("#slider4");
    sliderBlock.slider({
      create: function( event, ui ) {
        $("#slider4").find(".ui-slider-handle").text('$');
      },
      slide: function(event, ui) {
        var values = ui.value;
        self.initCircleChartsInvestor(values);
        $('.chart-amount-you-want-invest').html(values);
      }
    }, {
      min: 100,
      max: 10000,
      step: 100,
      range: "min"
    });
  },

  initSliderUiInvestor2: function() {
    var self = this,
      sliderBlock = $("#slider5");
    sliderBlock.slider({
      start: function(event, ui) {
        //                $("#slider5 .ui-slider-handle:first").css('visibility', 'hidden');
      },
      slide: function(event, ui) {
        var values = ui.value;
        self.initCircleChartsInvestor2(values);
        //                $("#slider5 .ui-slider-handle:first").css('visibility', 'hidden');
        $('.chart-term-you-want-invest').html(values);
      },
      change: function(event, ui) {
        //                var values = ui.value;
        //                self.initCircleChartsInvestor2(values);
        //                $("#slider5 .ui-slider-handle:first").css('visibility', 'hidden');
        //                $('.chart-term-you-want-invest').html(values);
      }
    }, {
      min: 1,
      max: 24,
      step: 1,
      range: "min"
    });
  },

  initSliderUiInvestor3: function() {
    var self = this,
      sliderBlock = $("#slider6");
    sliderBlock.slider({
      start: function(event, ui) {},
      slide: function(event, ui) {
        var value = ui.value;
        //                self.initCircleChartsInvestor3(values[0], values[1]);
        $('.chart-rate-you-want-invest').html(value);
        //                $('.chart-rate-you-want-invest2').html(values[1]);
      },
      change: function(event, ui) {
        //                var values = ui.values;
        //                self.initCircleChartsInvestor3(values[0], values[1]);
        //                $('.chart-rate-you-want-invest').html(values[0]);
        //                $('.chart-rate-you-want-invest2').html(values[1]);
      }
    }, {
      min: 0.5,
      max: 10,
      //            range: true,
      step: 0.5
    });
  },

  initSliderUi: function() {
    var self = this,
      sliderBlock = $("#slider");
    sliderBlock.slider({
      create: function( event, ui ) {
        $("#slider").find(".ui-slider-handle").text('$');
      },

      slide: function(event, ui) {
        var values = ui.value;
        self.initCircleCharts(values);
        $('.chart-amount-you-want').html(values);
      }
    }, {
      min: 100,
      max: 10000,
      step: 100,
      range: "min"
    });
  },

  initSliderUi2: function() {
    var self = this,
      sliderBlock = $("#slider2");
    sliderBlock.slider({
      start: function(event, ui) {
        //                $("#slider2 .ui-slider-handle:first").css('visibility', 'hidden');
      },
      slide: function(event, ui) {
        var values = ui.value;
        self.initCircleCharts2(values);
        $('.chart-term-you-want').html(values);
      },
      change: function(event, ui) {
        //                var values = ui.value;
        //                self.initCircleCharts2(values);
        //                $('.chart-term-you-want').html(values);
      }
    }, {
      min: 1,
      max: 24,
      step: 1,
      range: "min"
    });
  },

  initSliderUi3: function() {
    var self = this,
      sliderBlock = $("#slider3");
    sliderBlock.slider({
      start: function(event, ui) {
        //                $("#slider3 .ui-slider-handle:first").css('visibility', 'hidden');
      },
      slide: function(event, ui) {
        var values = ui.value;
        self.initCircleCharts3(values);
        $('.chart-payment-you-want').html(values);
      },
      change: function(event, ui) {
        //                var values = ui.value;
        //                self.initCircleCharts3(values);
        //                $('.chart-payment-you-want').html(values);
      }
    }, {
      min: 100,
      max: 10000,
      step: 100,
      range: "min"
    });
  },

  initCircleCharts: function(values) {
    var self = this,
      maxAmount = 10000,
      strip1,
      strip2;

    if (self.resultBorrower1) {
      strip1 = self.resultBorrower1,
        strip2 = maxAmount - strip1;
    } else {
      strip1 = 100;
      strip2 = 9900;
    }

    var doughnutData = [{
      value: strip1,
      color: "#ea6336"
    }, {
      value: strip2,
      color: "#d9d8cf"
    }];

    var ctx = document.getElementById("myChart").getContext("2d");
    window.myDoughnut = new Chart(ctx).Doughnut(doughnutData, {
      showTooltips: false,
      scaleShowLabels: false,
      responsive: true,
      segmentShowStroke: true,
      segmentStrokeColor: "#fff",
      segmentStrokeWidth: 0,
      percentageInnerCutout: 80
    });

    if (values) {
      self.resultBorrower1 = values;
      myDoughnut.segments[0].value = values;
      myDoughnut.segments[1].value = maxAmount - values;
      myDoughnut.update();
    } else {
      self.resultBorrower1 = 100;
    }
  },

  initCircleCharts2: function(values) {
    var self = this,
      maxAmount = 24,
      strip1,
      strip2;

    if (self.resultBorrower2) {
      strip1 = self.resultBorrower2,
        strip2 = maxAmount - strip1;
    } else {
      strip1 = 1;
      strip2 = 23;
    }

    var doughnutData = [{
      value: strip1,
      color: "#ea6336"
    }, {
      value: strip2,
      color: "#d9d8cf"
    }];

    var ctx = document.getElementById("myChart2").getContext("2d");
    window.myDoughnut = new Chart(ctx).Doughnut(doughnutData, {
      showTooltips: false,
      scaleShowLabels: false,
      responsive: true,
      segmentShowStroke: true,
      segmentStrokeColor: "#fff",
      segmentStrokeWidth: 0,
      percentageInnerCutout: 80
    });

    if (values) {
      self.resultBorrower2 = values;
      myDoughnut.segments[0].value = values;
      myDoughnut.segments[1].value = maxAmount - values;
      myDoughnut.update();
    } else {
      self.resultBorrower2 = 1;
    }
  },

  initCircleCharts3: function(values) {
    var self = this,
      maxAmount = 10000,
      strip1,
      strip2;

    if (self.resultBorrower3) {
      strip1 = self.resultBorrower3,
        strip2 = maxAmount - strip1;
    } else {
      strip1 = 100;
      strip2 = 9900;
    }


    var doughnutData = [{
      value: strip1,
      color: "#ea6336"
    }, {
      value: strip2,
      color: "#d9d8cf"
    }];

    var ctx = document.getElementById("myChart3").getContext("2d");
    window.myDoughnut = new Chart(ctx).Doughnut(doughnutData, {
      showTooltips: false,
      scaleShowLabels: false,
      responsive: true,
      segmentShowStroke: true,
      segmentStrokeColor: "#fff",
      segmentStrokeWidth: 0,
      percentageInnerCutout: 80
    });

    if (values) {
      self.resultBorrower3 = values;
      myDoughnut.segments[0].value = values;
      myDoughnut.segments[1].value = maxAmount - values;
      myDoughnut.update();
    } else {
      self.resultBorrower3 = 100;
    }
  },

  initCircleChartsMultiple: function() {
    var self = this,
      maxAmount = 10000,
      maxAmount2 = 24,
      maxAmount3 = 10000,
      secondSegment1 = maxAmount - self.resultBorrower1,
      secondSegment2 = maxAmount2 - self.resultBorrower2,
      secondSegment3 = maxAmount3 - self.resultBorrower1 / self.resultBorrower2,
      monthPayment = self.resultBorrower1 / self.resultBorrower2,
      monthPaymentfinal = Math.round(monthPayment).toFixed(2);

    $('.chart-amount-you-want').html(self.resultBorrower1);
    $('.chart-term-you-want').html(self.resultBorrower2);
    $('.chart-payment-you-want').html(monthPaymentfinal);

    var doughnutData1 = [{
      value: self.resultBorrower1,
      color: "#ea6336"
    }, {
      value: secondSegment1,
      color: "#d9d8cf"
    }];
    var doughnutData2 = [{
      value: self.resultBorrower2,
      color: "#ea6336"
    }, {
      value: secondSegment2,
      color: "#d9d8cf"
    }];
    var doughnutData3 = [{
      value: monthPaymentfinal,
      color: "#ea6336"
    }, {
      value: secondSegment3,
      color: "#d9d8cf"
    }];

    var ctx = document.getElementById("myChart4").getContext("2d");
    window.myDoughnut = new Chart(ctx).Doughnut(doughnutData1, {
      showTooltips: false,
      scaleShowLabels: false,
      responsive: true,
      segmentShowStroke: true,
      segmentStrokeColor: "#fff",
      segmentStrokeWidth: 0,
      percentageInnerCutout: 80
    });

    var ctx2 = document.getElementById("myChart5").getContext("2d");
    window.myDoughnut = new Chart(ctx2).Doughnut(doughnutData2, {
      showTooltips: false,
      scaleShowLabels: false,
      responsive: true,
      segmentShowStroke: true,
      segmentStrokeColor: "#fff",
      segmentStrokeWidth: 0,
      percentageInnerCutout: 80
    });

    self.initScoreLetter();
    self.initBorrowerFinnishTab();
  },


  initCircleChartsInvestor: function(values) {
    var self = this,
      maxAmount = 10000,
      strip1,
      strip2;

    if (self.resultInvestor1) {
      strip1 = self.resultInvestor1,
        strip2 = maxAmount - strip1;
    } else {
      strip1 = 100;
      strip2 = 9900;
    }


    var doughnutData = [{
      value: strip1,
      color: "#ea6336"
    }, {
      value: strip2,
      color: "#d9d8cf"
    }];

    var ctx = document.getElementById("myChart10").getContext("2d");
    window.myDoughnut = new Chart(ctx).Doughnut(doughnutData, {
      showTooltips: false,
      scaleShowLabels: false,
      responsive: true,
      segmentShowStroke: true,
      segmentStrokeColor: "#fff",
      segmentStrokeWidth: 0,
      percentageInnerCutout: 80
    });

    if (values) {
      self.resultInvestor1 = values;
      myDoughnut.segments[0].value = values;
      myDoughnut.segments[1].value = maxAmount - values;
      myDoughnut.update();
    } else {
      self.resultInvestor1 = 100;
    }
  },

  initCircleChartsInvestor2: function(values) {
    var self = this,
      maxAmount = 24,
      strip1,
      strip2;

    if (self.resultInvestor2) {
      strip1 = self.resultInvestor2,
        strip2 = maxAmount - strip1;
    } else {
      strip1 = 1;
      strip2 = 23;
    }

    var doughnutData = [{
      value: strip1,
      color: "#ea6336"
    }, {
      value: strip2,
      color: "#d9d8cf"
    }];

    var ctx = document.getElementById("myChart11").getContext("2d");
    window.myDoughnut = new Chart(ctx).Doughnut(doughnutData, {
      showTooltips: false,
      scaleShowLabels: false,
      responsive: true,
      segmentShowStroke: true,
      segmentStrokeColor: "#fff",
      segmentStrokeWidth: 0,
      percentageInnerCutout: 80
    });

    if (values) {
      self.resultInvestor2 = values;
      myDoughnut.segments[0].value = values;
      myDoughnut.segments[1].value = maxAmount - values;
      myDoughnut.update();
    } else {
      self.resultInvestor2 = 1;
    }
  },

  initCircleChartsInvestor3: function(value1, value2) {
    var self = this,
      maxAmount = 10,
      strip1,
      strip2,
      strip3;


    if (self.resultInvestor3 && self.resultInvestor4) {
      strip1 = self.resultInvestor3,
        strip2 = self.resultInvestor4 - strip1,
        strip3 = maxAmount - strip1 - strip2;
    } else {
      strip1 = 0;
      strip2 = 0.5,
      strip3 = 9.5;
    }

    var doughnutData = [{
        value: strip1,
        color: "#d9d8cf"
      }, {
        value: strip2,
        color: "#ea6336"
      }, {
        value: strip3,
        color: "#d9d8cf"
      }

    ];

    var ctx = document.getElementById("myChart12").getContext("2d");
    window.myDoughnut = new Chart(ctx).Doughnut(doughnutData, {
      showTooltips: false,
      scaleShowLabels: false,
      responsive: true,
      segmentShowStroke: true,
      segmentStrokeColor: "#fff",
      segmentStrokeWidth: 0,
      percentageInnerCutout: 80
    });

    if (value1 && value2) {
      self.resultInvestor3 = value1;
      self.resultInvestor4 = value2;

      myDoughnut.segments[0].value = value1;
      myDoughnut.segments[1].value = value2 - value1;
      myDoughnut.segments[2].value = maxAmount - value2;

      myDoughnut.update();
    } else {
      self.resultInvestor3 = 0.5;
      self.resultInvestor4 = 0.5;
    }
  },

  initCircleChartsMultipleInvestor: function() {

    var self = this,
      maxAmount = 10000,
      maxAmount2 = 24,
      maxAmount3 = 10,
      secondSegment1 = maxAmount - self.resultInvestor1,
      secondSegment2 = maxAmount2 - self.resultInvestor2,
      secondSegment3 = self.resultInvestor3,
      secondSegment4 = self.resultInvestor4 - secondSegment3,
      secondSegment5 = maxAmount3 - secondSegment4;

    $('.chart-amount-you-want-invest').html(self.resultInvestor1);
    $('.chart-term-you-want-invest').html(self.resultInvestor2);
    $('.chart-rate-you-want-invest').html(self.resultInvestor3);
    $('.chart-rate-you-want-invest2').html(self.resultInvestor4);

    var doughnutData1 = [{
      value: self.resultInvestor1,
      color: "#ea6336"
    }, {
      value: secondSegment1,
      color: "#d9d8cf"
    }];
    var doughnutData2 = [{
      value: secondSegment3,
      color: "#ea6336"
    }, {
      value: secondSegment2,
      color: "#d9d8cf"
    }];
    var doughnutData3 = [{
      value: secondSegment3,
      color: "#d9d8cf"
    }, {
      value: secondSegment4,
      color: "#ea6336"
    }, {
      value: secondSegment5,
      color: "#d9d8cf"
    }];

    var ctx = document.getElementById("myChart13").getContext("2d");
    window.myDoughnut = new Chart(ctx).Doughnut(doughnutData1, {
      showTooltips: false,
      scaleShowLabels: false,
      responsive: true,
      segmentShowStroke: true,
      segmentStrokeColor: "#fff",
      segmentStrokeWidth: 0,
      percentageInnerCutout: 80
    });

    var ctx2 = document.getElementById("myChart14").getContext("2d");
    window.myDoughnut = new Chart(ctx2).Doughnut(doughnutData2, {
      showTooltips: false,
      scaleShowLabels: false,
      responsive: true,
      segmentShowStroke: true,
      segmentStrokeColor: "#fff",
      segmentStrokeWidth: 0,
      percentageInnerCutout: 80
    });

    var ctx3 = document.getElementById("myChart15").getContext("2d");
    window.myDoughnut = new Chart(ctx3).Doughnut(doughnutData3, {
      showTooltips: false,
      scaleShowLabels: false,
      responsive: true,
      segmentShowStroke: true,
      segmentStrokeColor: "#fff",
      segmentStrokeWidth: 0,
      percentageInnerCutout: 80
    });
  },

  initCircleChartsMultipleFinalBorrower: function() {
    var self = this,
      maxAmount = 10000,
      maxAmount2 = 24,
      maxAmount3 = 10000,
      secondSegment1 = maxAmount - self.resultBorrower1,
      secondSegment2 = maxAmount2 - self.resultBorrower2,
      secondSegment3 = maxAmount3 - self.resultBorrower1 / self.resultBorrower2,
      monthPayment = self.resultBorrower1 / self.resultBorrower2,
      monthPaymentfinal = Math.round(monthPayment).toFixed(2);


    $('.chart-amount-you-want').html(self.resultBorrower1);
    $('.chart-term-you-want').html(self.resultBorrower2);
    $('.chart-payment-you-want').html(monthPaymentfinal);

    var doughnutData1 = [{
      value: self.resultBorrower1,
      color: "#ea6336"
    }, {
      value: secondSegment1,
      color: "#d9d8cf"
    }];
    var doughnutData2 = [{
      value: self.resultBorrower2,
      color: "#ea6336"
    }, {
      value: secondSegment2,
      color: "#d9d8cf"
    }];
    var doughnutData3 = [{
      value: monthPaymentfinal,
      color: "#ea6336"
    }, {
      value: secondSegment3,
      color: "#d9d8cf"
    }];

    var ctx = document.getElementById("myChart7").getContext("2d");
    window.myDoughnut = new Chart(ctx).Doughnut(doughnutData1, {
      showTooltips: false,
      scaleShowLabels: false,
      responsive: true,
      segmentShowStroke: true,
      segmentStrokeColor: "#fff",
      segmentStrokeWidth: 0,
      percentageInnerCutout: 80
    });

    var ctx2 = document.getElementById("myChart8").getContext("2d");
    window.myDoughnut = new Chart(ctx2).Doughnut(doughnutData2, {
      showTooltips: false,
      scaleShowLabels: false,
      responsive: true,
      segmentShowStroke: true,
      segmentStrokeColor: "#fff",
      segmentStrokeWidth: 0,
      percentageInnerCutout: 80
    });

    var ctx3 = document.getElementById("myChart9").getContext("2d");
    window.myDoughnut = new Chart(ctx3).Doughnut(doughnutData3, {
      showTooltips: false,
      scaleShowLabels: false,
      responsive: true,
      segmentShowStroke: true,
      segmentStrokeColor: "#fff",
      segmentStrokeWidth: 0,
      percentageInnerCutout: 80
    });
  },

  initScoreLetter: function() {
    var self = this,
      scoreLink = $('.score-letter a');
    scoreLink.on('click', function(e) {
      e.preventDefault();
      scoreLink.addClass('score-letter-active').not(this).removeClass('score-letter-active');
      var scoreLetterBlock = $('.score-letter-active');
      self.resultBorrowerScore = scoreLetterBlock.data('score');
    });
  },

  initBorrowerFinnishTab: function() {
    var self = this;
    //        $('.score-setter .calculate , .calc-next-final').on('click', function (e) {
    //            e.preventDefault();
    //            $('.borrower-finish1').fadeOut(function () {
    ////
    ////                $.ajax({
    ////                    url: '/',
    ////                    beforeSend: function () {
    ////                        $('.tab-active').css('position' , 'relative').append("<div class='ajax-circle'></div>");
    ////
    ////                    },
    ////                    success: function (data) {
    ////                        $('.tab-active .ajax-circle').remove();
    ////                        $('.tab-active').css('position' , 'static');
    ////                        $('.borrower-finish2').fadeIn(function () {
    ////                            self.initCircleChartsMultipleFinalBorrower(data);
    ////                        });
    ////                    }
    ////                });
    //                $('.tab-active .ajax-circle').remove();
    //                $('.tab-active').css('position', 'static');
    //                $('.borrower-finish2').fadeIn(function () {
    //                    self.initCircleChartsMultipleFinalBorrower();
    //                });
    //            });
    //        });
  },

  initProjectListSignIn: function() {
    var self = this,
      loginBlock = $('.user-login-form-container');

    $('.pr-sign-in-but-block a[href^="#"]').on('click', function(e) {
      e.preventDefault();
      console.log(loginBlock);
      var target = this.hash,
        $target = $(target);
      $('html, body').stop().animate({
        'scrollTop': $target.offset().top
      }, 500, 'swing', function() {
        window.location.hash = target;
        loginBlock.fadeIn();
        loginBlock.parent("li").addClass("active");
        setTimeout(function() {
          $("#user-login").focus();
        }, 0);
      });
    });
  },

  initAddToInvestList: function() {
    var self = this,
      loginBlock = $('.login-form'),
      addToListLink = $('.add-to-invest-list a');
    addToListLink.on('click', function(e) {
      e.preventDefault();
      var investIdlik = $(this).data('invid');
    });
  },

  initFeedbackSlider: function() {
    var self = this,
      textItem = $('.fdb-slider-item'),
      forward = 1,
      backward = 0;

    textItem.each(function(count) {
      $(this).attr('data-number', (count + 1));
    });
    $('.fdb-slider-item:first').addClass('fdb-slider-item-active').fadeIn();
    $('.fdb-slider-right').on('click', function(e) {
      e.preventDefault();
      self.initFeedbackSliderAuto(forward, backward);
    });
    $('.fdb-slider-left').on('click', function(e) {
      e.preventDefault();
      self.initFeedbackSliderAuto(backward, forward);
    });
    setInterval(function() {
      self.initFeedbackSliderAuto(forward, backward);
    }, 5000);
  },

  initFeedbackSliderAuto: function(forward, backward) {
    var self = this,
      countDataNext,
      textItem = $('.fdb-slider-item'),
      textActive = $('.fdb-slider-item-active'),
      textItemsCount = textItem.length,
      countDataC = parseInt(textActive.data('number'));

    if (textItem.hasClass('fdb-slider-item-active') && (countDataC <= textItemsCount)) {
      countDataNext = countDataC + forward - backward;
      if (countDataNext == 0) {
        textActive.removeClass('fdb-slider-item-active');
        textActive.fadeOut('900', function() {
          $('.fdb-slider-item[data-number="' + $(textItem[textItemsCount - 1]).data('number') + '"]').fadeIn('900').addClass('fdb-slider-item-active');
        });
      } else if (countDataNext > textItemsCount) {
        textActive.removeClass('fdb-slider-item-active');
        textActive.fadeOut('900', function() {

          $('.fdb-slider-item[data-number="' + $(textItem[0]).data('number') + '"]').fadeIn('900').addClass('fdb-slider-item-active');
        });
      } else if (countDataNext < parseInt($(textItem[0]).data('number'))) {
        textActive.removeClass('fdb-slider-item-active');
        textActive.fadeOut('900', function() {

          $('.fdb-slider-item[data-number="' + countDataNext + '"]').fadeIn('900').addClass('fdb-slider-item-active');
        });
      } else {
        textActive.removeClass('fdb-slider-item-active');
        textActive.fadeOut('900', function() {
          $('.fdb-slider-item[data-number="' + countDataNext + '"]').fadeIn('900').addClass('fdb-slider-item-active');
        });
      }
    } else {
      if (textItem.hasClass('fdb-slider-item-active')) {
        textActive.removeClass('fdb-slider-item-active');
        textActive.fadeOut('900', function() {
          $('.fdb-slider-item[data-number="' + $(textItem[0]).data('number') + '"]').fadeIn('900').addClass('fdb-slider-item-active');
        });
      }
    }
  },

  initPressSlider: function() {
    $("#text_slider .effectContainer").fadeTransition({
      pauseTime: 5000,
      transitionTime: 500,
      delayStart: 0,
      pauseOnMouseOver: true,
      createNavButtons: true
    });
  },

  initAddToWishList: function() {
    var self = this,
      button = $('.add-to-wish-list'),
      buttonTitle = button.html();

    button.on('click', function(e) {
      e.preventDefault();

      var projetId = $(this).closest('.project-item'),
        dataId = parseInt(projetId.data('prinvid')),
        currentBut = $('.project-item[data-prinvid="' + dataId + '"] .add-to-wish-list');
      $(this).html(self.addedToWishList);

      if (!currentBut.hasClass('add-to-wish-list-added')) {
        currentBut.addClass('add-to-wish-list-added');
      } else {
        $(this).html(buttonTitle);
        currentBut.removeClass('add-to-wish-list-added');
      }
    });
  },

  initAddToWatchList: function() {
    var self = this,
      button = $('.add-to-watch-list'),
      buttonTitle = button.html();

    button.on('click', function(e) {
      e.preventDefault();

      var projetId = $(this).closest('.project-item'),
        dataId = parseInt(projetId.data('prinvid')),
        currentBut = $('.project-item[data-prinvid="' + dataId + '"] .add-to-watch-list');
      $(this).html(self.addedToWatchList);

      if (!currentBut.hasClass('add-to-watch-list-added')) {
        currentBut.addClass('add-to-watch-list-added');
      } else {
        $(this).html(buttonTitle);
        currentBut.removeClass('add-to-watch-list-added');
      }
    });
  },

  initMessageForm: function() {
    var self = this,
      button = $('#message-form button'),
      buttonValue = $('#message-form button').html(),
      form = $('#message-form'),
      formBlock = $('.f-form');


    button.on('click', function(e) {
      var userName = $('.user-name').val(),
        userMail = $('.user-mail').val(),
        text = $('#message-form textarea').val();
      e.preventDefault();

      if (text == "" || userName == "" || userMail == "") {
        button.html(self.messageFormError);
        setTimeout(function() {
          button.html(buttonValue);
        }, 3000);
      } else {
        form.fadeOut(function() {
          var data = form.serialize();
          $.ajax({
            url: '/',
            data: data,
            beforeSend: function() {
              formBlock.css('position', 'relative').append("<div class='ajax-circle'></div>");
            },
            success: function() {
              $('.f-form .ajax-circle').remove();
              formBlock.css('position', 'relative').append("<div class='form-message'>Thank you for your feedback!</div>");
            }
          });
        });
      }


    });
  }
};

$(function() {
  LendingStar.data.index.init();
});
