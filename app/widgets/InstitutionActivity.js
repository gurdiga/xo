(function() {
  'use strict';

  function InstitutionActivity() {
    var domElement = createElement();

    appendWidgets([
      new ActivityDateField(),
      new ActivityDescription('Intentarea')
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

  var getAppenderOf = window.App.Utils.getAppenderOf;
  var createDOMElement = window.App.Utils.createDOMElement;
  var appendWidgets = window.App.Utils.appendWidgets;

  window.App.Widgets.InstitutionActivity = InstitutionActivity;

}());
