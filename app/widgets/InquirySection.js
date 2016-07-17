(function() {
  'use strict';

  function InquirySection(fieldValues) {
    var domElement = createDOMElement('INQUIRY-SECTION');

    var childWidgets = [
      createField(LabeledTextField, 'Numărul de înregistrare', 'numărul-de-înregistrare', fieldValues),
      createField(LabeledDateField, 'Data depunerii cererii', 'data-depunerii', fieldValues)
    ];

    var section = createSection(childWidgets);
    section.appendTo(domElement);

    this.getValue = getFieldValueCollector(childWidgets);
    this.appendTo = getAppenderOf(domElement);
    this.setStyle = getStylerOf(domElement);
  }

  function createSection(childWidgets) {
    var label = 'Cerere de intentare';
    var widgetName = 'InquirySection';

    return new Section(label, childWidgets, widgetName);
  }

  var Section = window.App.Widgets.Section;
  var LabeledTextField = window.App.Widgets.LabeledTextField;
  var LabeledDateField = window.App.Widgets.LabeledDateField;

  var createDOMElement = window.App.Utils.createDOMElement;
  var getAppenderOf = window.App.Utils.getAppenderOf;
  var getStylerOf = window.App.Utils.getStylerOf;
  var createField = window.App.Utils.createField;
  var getFieldValueCollector = window.App.Utils.getFieldValueCollector;

  window.App.Widgets.InquirySection = InquirySection;

}());
