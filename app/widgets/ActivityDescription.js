(function() {
  'use strict';

  function ActivityDescription() {
    var domElement = createElement();

    this.appendTo = getAppenderOf(domElement);
  }

  function createElement() {
    return createDOMElement('activity-description');
  }

  var createDOMElement = window.App.Utils.createDOMElement;
  var getAppenderOf = window.App.Utils.getAppenderOf;

  window.App.Widgets.ActivityDescription = ActivityDescription;

}());
