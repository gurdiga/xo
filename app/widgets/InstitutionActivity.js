(function() {
  'use strict';

  function InstitutionActivity() {
    var domElement = createElement();

    appendWidgets([
      new ActivityDateField(),
      new ActivityDescription('Intentarea'),
      new ActivityDetailsSection([
        new CreateWritButton()
      ])
    ]).to(domElement);

    this.appendTo = getAppenderOf(domElement);
  }

  function createElement() {
    var style = {
      display: 'block'
    };

    return createDOMElement('institution-activity', style);
  }

  var ActivityDateField = window.App.Widgets.ActivityDateField;
  var ActivityDescription = window.App.Widgets.ActivityDescription;
  var ActivityDetailsSection = window.App.Widgets.ActivityDetailsSection;
  var CreateWritButton = window.App.Widgets.CreateWritButton;

  var getAppenderOf = window.App.Utils.getAppenderOf;
  var createDOMElement = window.App.Utils.createDOMElement;
  var appendWidgets = window.App.Utils.appendWidgets;

  window.App.Widgets.InstitutionActivity = InstitutionActivity;

}());
