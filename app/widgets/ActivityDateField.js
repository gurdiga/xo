(function() {
  'use strict';

  function ActivityDateField() {
    var domElement = createElement();
    WidgetRole.apply(this, [domElement]);

    addDateFieldInputTo(domElement);
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

  var WidgetRole = window.App.Widgets.WidgetRole;
  var LabeledDateField = window.App.Widgets.LabeledDateField;

  var createDOMElement = window.App.Utils.createDOMElement;

  window.App.Widgets.ActivityDateField = ActivityDateField;

}());
