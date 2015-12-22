(function() {
  'use strict';

  function InstitutionActivity() {
    var domElement = createElement();

    addDateField(domElement);
    addDescription(domElement);

    this.appendTo = getAppenderOf(domElement);
  }

  function createElement() {
    var style = {
      display: 'block'
    };

    return createDOMElement('institution-activity', style);
  }

  function addDateField(domElement) {
    var dateField = new ActivityDateField();
    dateField.appendTo(domElement);
  }

  function addDescription(domElement) {
    var description = new ActivityDescription('Intentarea');
    description.appendTo(domElement);
  }

  var ActivityDateField = window.App.Widgets.ActivityDateField;
  var ActivityDescription = window.App.Widgets.ActivityDescription;

  var getAppenderOf = window.App.Utils.getAppenderOf;
  var createDOMElement = window.App.Utils.createDOMElement;

  window.App.Widgets.InstitutionActivity = InstitutionActivity;

}());
