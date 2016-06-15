(function() {
  'use strict';

  function Activity(widgetName, descriptionText, detailWidgets) {
    var domElement = createElement(widgetName);
    var detailsSection = createDetailsSection(detailWidgets);

    appendWidgets([
      new ActivityDateField(),
      new ActivityDescription(descriptionText),
      detailsSection
    ]).to(domElement);

    this.appendTo = getAppenderOf(domElement);

    this.getDescription = function() {
      return descriptionText;
    };

    this.setDetailWidgets = function(detailWidgets) {
      detailsSection.setContents(detailWidgets);
    };
  }

  Activity.createWithData = function(data) {
    var activity = new this();

    activity.setData(data);

    return activity;
  };

  function createElement(widgetName) {
    var style = {
      marginTop: '5px',
      marginBottom: '10px',
      borderWidth: '0',
      padding: '0'
    };

    var attributes = {
      'widget-name': widgetName
    };

    return createDOMElement('fieldset', style, attributes);
  }

  function createDetailsSection(childWidgets) {
    var detailsSection = new ActivityDetailsSection();
    detailsSection.setContents(childWidgets);

    return detailsSection;
  }

  var ActivityDateField = window.App.Widgets.ActivityDateField;
  var ActivityDescription = window.App.Widgets.ActivityDescription;
  var ActivityDetailsSection = window.App.Widgets.ActivityDetailsSection;

  var getAppenderOf = window.App.Utils.getAppenderOf;
  var createDOMElement = window.App.Utils.createDOMElement;
  var appendWidgets = window.App.Utils.appendWidgets;

  window.App.Widgets.Activity = Activity;

}());
