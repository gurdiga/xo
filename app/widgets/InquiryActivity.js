(function() {
  'use strict';

  function InquiryActivity() {
    var domElement = createDOMElement('inquiry-activity');

    addDateField(domElement);
    addDescription(domElement);
    addDetailsSection(domElement);

    this.appendTo = getAppenderOf(domElement);
  }

  function addDateField(domElement) {
    var value = '';
    var style = { width: '6.5em' };
    var dateField = new DateField(value, style);
    dateField.appendTo(domElement);
  }

  function addDescription(domElement) {
    var style = {
      fontSize: '16px',
      marginLeft: '0.5em',
      verticalAlign: '-1px'
    };
    var descriptionElement = createDOMElement('span', style);
    descriptionElement.textContent = 'Cererea creditorului';
    domElement.appendChild(descriptionElement);
  }

  function addDetailsSection(domElement) {
    var detailsSection = new ActivityDetailsSection();
    detailsSection.appendTo(domElement);
  }

  var DateField = window.App.Widgets.DateField;
  var ActivityDetailsSection = window.App.Widgets.ActivityDetailsSection;

  var getAppenderOf = window.App.Utils.getAppenderOf;
  var createDOMElement = window.App.Utils.createDOMElement;

  window.App.Widgets.InquiryActivity = InquiryActivity;

}());
