(function() {
  'use strict';

  function CompletionLabel(completionTime) {
    assert(_.isDate(completionTime), 'CompletionLabel expects the completionTime argument to be a Date object');

    var domElement = createElement();

    addContent(domElement, completionTime);

    this.getData = delegateTo(completionTime, 'toISOString');

    this.appendTo = getAppenderOf(domElement);
    this.setStyle = getStylerOf(domElement);
    this.remove = getRemoverOf(domElement);
  }

  function createElement() {
    var style = {
      'font-size': '12px',
      'color': 'gray'
    };

    return createDOMElement('completion-label', style);
  }

  function addContent(domElement, completionTime) {
    var content = document.createDocumentFragment();
    var preposition = document.createTextNode('completat la ');
    var timeElement = createTimeElement(completionTime);

    content.appendChild(preposition);
    content.appendChild(timeElement);
    domElement.appendChild(content);
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
  var getStylerOf = window.App.Utils.getStylerOf;
  var getRemoverOf = window.App.Utils.getRemoverOf;
  var delegateTo = window.App.Utils.delegateTo;
  var assert = window.App.Utils.assert;

  var moment = window.moment;

  window.App.Widgets.CompletionLabel = CompletionLabel;

}());
