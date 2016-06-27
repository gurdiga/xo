(function() {
  'use strict';

  function CompletionLabel() {
    var domElement = createElement();

    this.appendTo = getAppenderOf(domElement);
  }

  function createElement() {
    var domElement = createDOMElement('completion-label');

    var timeElement = createTimeElement();
    domElement.appendChild(timeElement);

    return domElement;
  }

  function createTimeElement() {
    var timeElement = document.createElement('time');

    timeElement.setAttribute('timestamp', getIntenalTimestamp());

    return timeElement;
  }

  function getIntenalTimestamp() {
    return '';
  }

  var createDOMElement = window.App.Utils.createDOMElement;
  var getAppenderOf = window.App.Utils.getAppenderOf;

  window.App.Widgets.CompletionLabel = CompletionLabel;

}());
