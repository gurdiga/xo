(function() {
  'use strict';

  function InquiryActivity() {
    var domElement = createElement();

    addDateField(domElement);
    addDescription(domElement);
    addDetailsSection(domElement);

    this.appendTo = getAppenderOf(domElement);
  }

  function createElement() {
    var style = {
      display: 'block'
    };

    return createDOMElement('inquiry-activity', style);
  }

  function addDateField(domElement) {
    var dateField = new ActivityDateField();
    dateField.appendTo(domElement);
  }

  function addDescription(domElement) {
    var description = new ActivityDescription('Cererea creditorului');
    description.appendTo(domElement);
  }

  function addDetailsSection(domElement) {
    var detailsSection = new ActivityDetailsSection(createDetailsFields());
    detailsSection.appendTo(domElement);
  }

  function createDetailsFields() {
    return [
      new LabeledTextField('Numărul de înregistrare')
    ];
  }

  var ActivityDateField = window.App.Widgets.ActivityDateField;
  var ActivityDescription = window.App.Widgets.ActivityDescription;
  var ActivityDetailsSection = window.App.Widgets.ActivityDetailsSection;
  var LabeledTextField = window.App.Widgets.LabeledTextField;

  var getAppenderOf = window.App.Utils.getAppenderOf;
  var createDOMElement = window.App.Utils.createDOMElement;

  window.App.Widgets.InquiryActivity = InquiryActivity;

}());
