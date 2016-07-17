(function() {
  'use strict';

  function InquirySection(fieldValues, additionalStyle) {
    var domElement = createElement(additionalStyle);

    var childWidgets = [
      createField(LabeledTextField, 'Numărul de înregistrare', 'numărul-de-înregistrare', fieldValues),
      createField(LabeledDateField, 'Data depunerii cererii', 'data-depunerii', fieldValues)
    ];

    var section = createSection(childWidgets);
    section.appendTo(domElement);

    this.getValue = getFieldValueCollector(childWidgets);
    this.appendTo = getAppenderOf(domElement);
  }

  function createElement(additionalStyle) {
    return createDOMElement('INQUIRY-SECTION', additionalStyle);
  }

  function createSection(childWidgets, additionalStyle) {
    var label = 'Cerere de intentare';
    var widgetName = 'InquirySection';
    var section = new Section(label, childWidgets, widgetName);

    if (additionalStyle) section.setStyle(additionalStyle);

    return section;
  }

  var Section = window.App.Widgets.Section;
  var LabeledTextField = window.App.Widgets.LabeledTextField;
  var LabeledDateField = window.App.Widgets.LabeledDateField;

  var createDOMElement = window.App.Utils.createDOMElement;
  var getAppenderOf = window.App.Utils.getAppenderOf;
  var createField = window.App.Utils.createField;
  var getFieldValueCollector = window.App.Utils.getFieldValueCollector;

  window.App.Widgets.InquirySection = InquirySection;

}());
