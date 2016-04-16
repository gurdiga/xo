(function() {
  'use strict';

  function Activity(widgetName, descriptionText, detailWidgets) {
    var domElement = createElement(widgetName);

    appendWidgets([
      new ActivityDateField(),
      new ActivityDescription(descriptionText),
      new ActivityDetailsSection(detailWidgets)
    ]).to(domElement);

    this.appendTo = getAppenderOf(domElement);

    this.getDescription = function() {
      return descriptionText;
    };
  }

  function createElement(widgetName) {
    var style = {
      marginTop: '5px',
      marginBottom: '10px',
      borderWidth: '0',
      padding: '0'
    };

    var domElement = createDOMElement('fieldset', style);
    domElement.setAttribute('widget-name', widgetName);

    return domElement;
  }

  var ActivityDateField = window.App.Widgets.ActivityDateField;
  var ActivityDescription = window.App.Widgets.ActivityDescription;
  var ActivityDetailsSection = window.App.Widgets.ActivityDetailsSection;

  var getAppenderOf = window.App.Utils.getAppenderOf;
  var createDOMElement = window.App.Utils.createDOMElement;
  var appendWidgets = window.App.Utils.appendWidgets;

  window.App.Widgets.Activity = Activity;

}());
