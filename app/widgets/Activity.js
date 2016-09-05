(function() {
  'use strict';

  function Activity(widgetName, descriptionText) {
    var domElement = createElement(widgetName);
    var detailsSection = new ActivityDetailsSection();

    appendWidgets([
      new ActivityTitle(descriptionText),
      new ActivityDateField(),
      detailsSection
    ]).to(domElement);

    this.appendTo = getAppenderOf(domElement);

    this.getDescription = function() {
      return descriptionText;
    };

    this.setDetailWidgets = function(detailWidgets) {
      detailsSection.setChildWidgets(detailWidgets);
    };
  }

  Activity.createWithData = function(data) {
    assert(_.isPlainObject(data), 'Activity.createWithData expects the argument to be a plain JS object');

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

  var ActivityDateField = window.App.Widgets.ActivityDateField;
  var ActivityTitle = window.App.Widgets.ActivityTitle;
  var ActivityDetailsSection = window.App.Widgets.ActivityDetailsSection;

  var getAppenderOf = window.App.Utils.getAppenderOf;
  var createDOMElement = window.App.Utils.createDOMElement;
  var appendWidgets = window.App.Utils.appendWidgets;
  var assert = window.App.Utils.assert;

  window.App.Widgets.Activity = Activity;

}());
