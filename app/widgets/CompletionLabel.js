(function() {
  'use strict';

  function CompletionLabel() {
    var domElement = createElement();
    var completionTime = new Date();

    render(domElement, completionTime);

    var isDisplayed = true;

    this.appendTo = getAppenderOf(domElement);

    this.getData = function() {
      return completionTime.toISOString();
    };

    this.toggle = function() {
      if (isDisplayed) {
        empty(domElement);
        isDisplayed = false;
      } else {
        completionTime = new Date();
        render(domElement, completionTime);
        isDisplayed = true;
      }
    };
  }

  function createElement() {
    return createDOMElement('completion-label');
  }

  function render(domElement, completionTime) {
    var content = document.createDocumentFragment();
    var preposition = document.createTextNode('completat la ');
    var timeElement = createTimeElement(completionTime);

    content.appendChild(preposition);
    content.appendChild(timeElement);
    domElement.appendChild(content);

    return content;
  }

  function empty(domElement) {
    domElement.innerHTML = '';
  }

  function createTimeElement(completionTime) {
    var timeElement = document.createElement('time');

    var humanReadableTimestamp = moment(completionTime).format('DD.MM.YYYY HH:mm');
    var internalTimestamp = completionTime.toISOString();

    timeElement.textContent = humanReadableTimestamp;
    timeElement.setAttribute('datetime', internalTimestamp);

    return timeElement;
  }

  var createDOMElement = window.App.Utils.createDOMElement;
  var getAppenderOf = window.App.Utils.getAppenderOf;
  var moment = window.moment;

  window.App.Widgets.CompletionLabel = CompletionLabel;

}());
