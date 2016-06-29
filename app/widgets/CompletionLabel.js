(function() {
  'use strict';

  function CompletionLabel() {
    var now = new Date();
    var domElement = createElement(now);

    this.appendTo = getAppenderOf(domElement);
    this.getData = delegateTo(now, 'toISOString');
  }

  function createElement(now) {
    var domElement = createDOMElement('completion-label');

    var timeElement = createTimeElement(now);
    domElement.appendChild(timeElement);

    return domElement;
  }

  function createTimeElement(now) {
    var timeElement = document.createElement('time');

    var humanReadableTimestamp = moment(now).format('DD.MM.YYYY HH:mm');
    var internalTimestamp = now.toISOString();

    timeElement.textContent = humanReadableTimestamp;
    timeElement.setAttribute('datetime', internalTimestamp);

    return timeElement;
  }

  var createDOMElement = window.App.Utils.createDOMElement;
  var getAppenderOf = window.App.Utils.getAppenderOf;
  var delegateTo = window.App.Utils.delegateTo;
  var moment = window.moment;

  window.App.Widgets.CompletionLabel = CompletionLabel;

}());
