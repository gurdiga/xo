(function() {
  'use strict';

  function LabeledDateField(labelText, value) {
    var domElement = createElement();
    WidgetRole.apply(this, [domElement]);

    var input = new DateField(value);
    var label = new FieldLabel(labelText, [input]);
    label.appendTo(domElement);

    this.getValue = delegateTo(input, 'getValue');
    this.focus = delegateTo(input, 'focus');
    this.setStyle = delegateTo(input, 'setStyle');
  }

  function createElement() {
    var style = {
      display: 'block'
    };

    return createDOMElement('labeled-date-field', style);
  }

  var WidgetRole = window.App.Widgets.WidgetRole;
  var FieldLabel = window.App.Widgets.FieldLabel;
  var DateField = window.App.Widgets.DateField;

  var createDOMElement = window.App.Utils.createDOMElement;
  var delegateTo = window.App.Utils.delegateTo;

  window.App.Widgets.LabeledDateField = LabeledDateField;

}());
