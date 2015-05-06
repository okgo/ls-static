LendingStar = window.LendingStar || {};
LendingStar.data = LendingStar.data || {};

LendingStar.data.reg = {

  init: function () {
    this.initCustomSelect();
    this.initHelpTips();
  },

  initCustomSelect: function () {
    var container = $(".phone-select");

    $.widget("custom.phoneselect", $.ui.selectmenu, {

      _renderItem: function (ul, item) {
        var text = item.label.replace(parseInt(item.label), ""),
          li = $("<li>", {
            text: text
          });

        if (parseInt(item.label)) {
          $("<span>").text(parseInt(item.label)).prependTo(li);
        }
        return li.appendTo(ul);
      },

      _drawButton: function () {
        this._super();

        var selected = this.element
          .find('[selected]')
          .length,
          placeholder = this.options.placeholder;

        if (!selected && placeholder) {
          this.buttonText.text(placeholder);
        }
      }

    });

    container.phoneselect({
      placeholder: "CODE",
      appendTo: "#registration-form",
      width: 96,
      open: function (event, ui) {
        $(".ui-selectmenu-menu").customScrollbar({
          skin: "modern-skin",
          hScroll: false
        });
      }
    });
  },

  initHelpTips: function () {
    var tooltips = $(".reg-form-container [title]").tooltip({
      position: {
        my: "left middle",
        at: "right+20 top+20"
      },
      tooltipClass: "custom-helptip"
    }).off("mouseover mouseout");

//    $("#custom").click(function () {
//      tooltips.tooltip("open");
//    });
  }

};

$(function () {
  LendingStar.data.reg.init();
});
