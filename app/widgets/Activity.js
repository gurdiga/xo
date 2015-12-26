(function() {
  'use strict';

  function Activity() {
    var domElement = createElement();

    appendWidgets([
      new ActivityDateField(),
    ]).to(domElement);

    this.appendTo = getAppenderOf(domElement);
  }

  function createElement() {
    var style = {
      borderWidth: '0',
      padding: '0'
    };

    var domElement = createDOMElement('fieldset', style);
    domElement.setAttribute('widget', 'Activity');

    return domElement;
  }

  var ActivityDateField = window.App.Widgets.ActivityDateField;

  var getAppenderOf = window.App.Utils.getAppenderOf;
  var createDOMElement = window.App.Utils.createDOMElement;
  var appendWidgets = window.App.Utils.appendWidgets;

  window.App.Widgets.Activity = Activity;

}());
