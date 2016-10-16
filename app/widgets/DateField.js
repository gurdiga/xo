(function() {
  'use strict';

  function DateField(defaultValue) {
    var domElement = createDOMElement('date-field');
    WidgetRole.apply(this, [domElement]);

    var dateFieldInput = new DateFieldInput(defaultValue);
    dateFieldInput.appendTo(domElement);

    this.getValue = delegateTo(dateFieldInput, 'getValue');
    this.focus = delegateTo(dateFieldInput, 'focus');
    this.setStyle = delegateTo(dateFieldInput, 'setStyle');
  }

  var WidgetRole = window.App.Widgets.WidgetRole;
  var DateFieldInput = window.App.Widgets.DateFieldInput;

  var createDOMElement = window.App.Utils.createDOMElement;
  var delegateTo = window.App.Utils.delegateTo;

  window.App.Widgets.DateField = DateField;

}());
