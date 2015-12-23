(function() {
  'use strict';

  function InquiryActivity() {
    var domElement = createElement();

    appendWidgets([
      new ActivityDateField(),
      new ActivityDescription('Cererea creditorului'),
      new ActivityDetailsSection([
        new LabeledTextField('Numărul de înregistrare')
      ])
    ]).to(domElement);

    this.appendTo = getAppenderOf(domElement);
  }

  function createElement() {
    var style = {
      display: 'block'
    };

    return createDOMElement('inquiry-activity', style);
  }

  var ActivityDateField = window.App.Widgets.ActivityDateField;
  var ActivityDescription = window.App.Widgets.ActivityDescription;
  var ActivityDetailsSection = window.App.Widgets.ActivityDetailsSection;
  var LabeledTextField = window.App.Widgets.LabeledTextField;

  var getAppenderOf = window.App.Utils.getAppenderOf;
  var createDOMElement = window.App.Utils.createDOMElement;
  var appendWidgets = window.App.Utils.appendWidgets;

  window.App.Widgets.InquiryActivity = InquiryActivity;

}());
