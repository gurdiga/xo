(function() {
  'use strict';

  function DateField(defaultValue) {
    var domElement = createDOMElement('date-field');

    var dateFieldInput = new DateFieldInput(defaultValue);
    dateFieldInput.appendTo(domElement);

    this.appendTo = getAppenderOf(domElement);
    this.getValue = delegateTo(dateFieldInput, 'getValue');
    this.focus = delegateTo(dateFieldInput, 'focus');
    this.setStyle = delegateTo(dateFieldInput, 'setStyle');
  }

  var DateFieldInput = window.App.Widgets.DateFieldInput;

  var getAppenderOf = window.App.Utils.getAppenderOf;
  var createDOMElement = window.App.Utils.createDOMElement;
  var delegateTo = window.App.Utils.delegateTo;

  window.App.Widgets.DateField = DateField;

}());
