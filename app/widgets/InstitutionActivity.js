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
    var style = {
      fontSize: '16px',
      marginLeft: '0.5em',
      verticalAlign: '-1px'
    };
    var descriptionElement = createDOMElement('span', style);
    descriptionElement.textContent = 'Intentarea';
    domElement.appendChild(descriptionElement);
  }

  var ActivityDateField = window.App.Widgets.ActivityDateField;

  var getAppenderOf = window.App.Utils.getAppenderOf;
  var createDOMElement = window.App.Utils.createDOMElement;

  window.App.Widgets.InstitutionActivity = InstitutionActivity;

}());
