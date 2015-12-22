(function() {
  'use strict';

  function ActivityDescription(text) {
    var domElement = createElement(text);

    this.appendTo = getAppenderOf(domElement);
  }

  function createElement(text) {
    var domElement = createDOMElement('activity-description');

    domElement.textContent = text;

    return domElement;
  }

  var createDOMElement = window.App.Utils.createDOMElement;
  var getAppenderOf = window.App.Utils.getAppenderOf;

  window.App.Widgets.ActivityDescription = ActivityDescription;

}());
