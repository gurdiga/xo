(function() {
  'use strict';

  function ActivityDateField() {
    var domElement = createElement();

    addDateFieldInputTo(domElement);

    this.appendTo = getAppenderOf(domElement);
  }

  function createElement() {
    return createDOMElement('activity-date-field');
  }

  function addDateFieldInputTo(domElement) {
    var labelText = 'Data intentării';
    var style = {
      'width': '6.5em'
    };

    var dateFieldInput = new LabeledDateField(labelText);
    dateFieldInput.setStyle(style);
    dateFieldInput.appendTo(domElement);
  }

  var LabeledDateField = window.App.Widgets.LabeledDateField;

  var getAppenderOf = window.App.Utils.getAppenderOf;
  var createDOMElement = window.App.Utils.createDOMElement;

  window.App.Widgets.ActivityDateField = ActivityDateField;

}());
