(function() {
  'use strict';

  function InquirySection() {
    var childWidgets = [];
    var additionalStyle = {};
    var section = new Section('Cerere de intentare', childWidgets, additionalStyle, 'InquirySection');

    this.appendTo = delegateTo(section, 'appendTo');
  }

  var Section = window.App.Widgets.Section;

  var delegateTo = window.App.Utils.delegateTo;

  window.App.Widgets.InquirySection = InquirySection;

}());
