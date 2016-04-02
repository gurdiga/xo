(function() {
  'use strict';

  function Activity(widget, descriptionText, detailWidgets) {
    var domElement = createElement(widget);

    appendWidgets([
      new ActivityDateField(),
      new ActivityDescription(descriptionText),
      new ActivityDetailsSection(detailWidgets)
    ]).to(domElement);

    this.appendTo = getAppenderOf(domElement);
  }

  function createElement(widget) {
    var style = {
      marginTop: '5px',
      marginBottom: '10px',
      borderWidth: '0',
      padding: '0'
    };

    var domElement = createDOMElement('fieldset', style);
    domElement.setAttribute('widget', widget);

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
