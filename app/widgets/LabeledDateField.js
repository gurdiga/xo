(function() {
  'use strict';

  function LabeledDateField(labelText, value) {
    var domElement = createElement();

    var input = new DateField(value);
    var label = new FieldLabel(labelText, [input]);
    label.appendTo(domElement);

    this.appendTo = getAppenderOf(domElement);
    this.remove = getRemoverOf(domElement);

    this.getValue = delegateTo(input, 'getValue');
    this.focus = delegateTo(input, 'focus');
  }

  function createElement() {
    var style = {
      display: 'block'
    };

    return createDOMElement('labeled-date-field', style);
  }

  var FieldLabel = window.App.Widgets.FieldLabel;
  var DateField = window.App.Widgets.DateField;

  var getAppenderOf = window.App.Utils.getAppenderOf;
  var getRemoverOf = window.App.Utils.getRemoverOf;
  var createDOMElement = window.App.Utils.createDOMElement;
  var delegateTo = window.App.Utils.delegateTo;

  window.App.Widgets.LabeledDateField = LabeledDateField;

}());
