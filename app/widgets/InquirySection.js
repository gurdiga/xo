(function() {
  'use strict';

  function InquirySection(fieldValues, additionalStyle) {
    var domElement = createElement(additionalStyle);
    var valuableChildren = {};

    var section = createSection([
      createValuableField(LabeledTextField, 'Numărul de înregistrare', 'numărul-de-înregistrare', fieldValues),
      createValuableField(LabeledDateField, 'Data depunerii cererii', 'data-depunerii', fieldValues)
    ]);

    section.appendTo(domElement);

    this.getValue = function() {
      return rMap('getValue', valuableChildren);
    };

    this.appendTo = getAppenderOf(domElement);

    function createValuableField(FieldClass, labelText, internalName, fieldValues) {
      var field = createField(FieldClass, labelText, internalName, fieldValues);

      valuableChildren[internalName] = field;

      return field;
    }
  }

  function createElement(additionalStyle) {
    return createDOMElement('INQUIRY-SECTION', additionalStyle);
  }

  function createSection(childWidgets) {
    var label = 'Cerere de intentare';
    var additionalStyle = {};
    var widgetName = 'InquirySection';

    return new Section(label, childWidgets, additionalStyle, widgetName);
  }

  var Section = window.App.Widgets.Section;
  var LabeledTextField = window.App.Widgets.LabeledTextField;
  var LabeledDateField = window.App.Widgets.LabeledDateField;

  var createDOMElement = window.App.Utils.createDOMElement;
  var getAppenderOf = window.App.Utils.getAppenderOf;
  var createField = window.App.Utils.createField;
  var rMap = window.App.Utils.rMap;

  window.App.Widgets.InquirySection = InquirySection;

}());
