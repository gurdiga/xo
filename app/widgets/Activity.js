(function() {
  'use strict';

  function Activity() {
    var domElement = createElement();

    this.appendTo = getAppenderOf(domElement);
  }

  function createElement() {
    var domElement = createDOMElement('fieldset');
    domElement.setAttribute('widget', 'Activity');
    return domElement;
  }

  var getAppenderOf = window.App.Utils.getAppenderOf;
  var createDOMElement = window.App.Utils.createDOMElement;

  window.App.Widgets.Activity = Activity;

}());
