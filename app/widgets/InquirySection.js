(function() {
  'use strict';

  function InquirySection(fieldValues, additionalStyle) {
    var fields = [
      createField(LabeledTextField, 'Numărul de înregistrare', 'numărul-de-înregistrare', fieldValues),
      createField(LabeledDateField, 'Data depunerii cererii', 'data-depunerii', fieldValues)
    ];

    var section = createSection(fields, additionalStyle);

    this.getValue = getFieldValueCollector(fields);
    this.appendTo = delegateTo(section, 'appendTo');
  }

  function createSection(childWidgets, additionalStyle) {
    var label = 'Cerere de intentare';
    var widgetName = 'InquirySection';

    return new Section(label, childWidgets, additionalStyle, widgetName);
  }

  var Section = window.App.Widgets.Section;
  var LabeledTextField = window.App.Widgets.LabeledTextField;
  var LabeledDateField = window.App.Widgets.LabeledDateField;

  var delegateTo = window.App.Utils.delegateTo;
  var createField = window.App.Utils.createField;
  var getFieldValueCollector = window.App.Utils.getFieldValueCollector;

  window.App.Widgets.InquirySection = InquirySection;

}());
