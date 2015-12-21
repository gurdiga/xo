(function() {
  'use strict';

  function ActivityDateField() {
    var domElement = createElement();

    addDateFieldInput(domElement);

    this.appendTo = getAppenderOf(domElement);
  }

  function createElement() {
    return createDOMElement('activity-date-field');
  }

  function addDateFieldInput(domElement) {
    var value = '';
    var style = { width: '6.5em' };
    var dateFieldInput = new DateFieldInput(value, style);
    dateFieldInput.appendTo(domElement);
  }

  var DateFieldInput = window.App.Widgets.DateFieldInput;

  var getAppenderOf = window.App.Utils.getAppenderOf;
  var createDOMElement = window.App.Utils.createDOMElement;

  window.App.Widgets.ActivityDateField = ActivityDateField;

}());
