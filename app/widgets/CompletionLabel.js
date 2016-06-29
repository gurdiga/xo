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

    var now = new Date();
    var humanReadableTimestamp = moment(now).format('DD.MM.YYYY HH:mm');
    var internalTimestamp = now.toISOString();

    timeElement.textContent = humanReadableTimestamp;
    timeElement.setAttribute('timestamp', internalTimestamp);

    return timeElement;
  }

  var createDOMElement = window.App.Utils.createDOMElement;
  var getAppenderOf = window.App.Utils.getAppenderOf;
  var moment = window.moment;

  window.App.Widgets.CompletionLabel = CompletionLabel;

}());
