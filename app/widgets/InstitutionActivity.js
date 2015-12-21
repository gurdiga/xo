(function() {
  'use strict';

  function InstitutionActivity() {
    var domElement = createElement();

    addDateField(domElement);

    this.appendTo = getAppenderOf(domElement);
  }

  function createElement() {
    var style = {
      display: 'block'
    };

    return createDOMElement('institution-activity', style);
  }

  function addDateField(domElement) {
    var value = '';
    var style = { width: '6.5em' };
    var dateField = new DateField(value, style);
    dateField.appendTo(domElement);
  }

  var DateField = window.App.Widgets.DateField;

  var getAppenderOf = window.App.Utils.getAppenderOf;
  var createDOMElement = window.App.Utils.createDOMElement;

  window.App.Widgets.InstitutionActivity = InstitutionActivity;

}());
