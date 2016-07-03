(function() {
  'use strict';

  function CompletionLabel() {
    var domElement = createElement();
    var completionTime = new Date();

    render(domElement, completionTime);

    var isDisplayed = true;

    this.appendTo = getAppenderOf(domElement);

    this.hide = function() {
      empty(domElement);
      isDisplayed = false;
    };

    this.display = function() {
      completionTime = new Date();
      render(domElement, completionTime);
      isDisplayed = true;
    };

    this.toggle = function() {
      if (isDisplayed) this.hide();
      else this.display();
    };

    this.getData = function() {
      return completionTime.toISOString();
    };

    this.setStyle = function(additionalStyle) {
      addStyle(domElement, additionalStyle);
    };
  }

  CompletionLabel.createWithStyle = function(additionalStyle) {
    var completionLabel = new CompletionLabel();

    completionLabel.setStyle(additionalStyle);

    return completionLabel;
  };

  function createElement() {
    var style = {
      'font-size': '12px',
      'color': 'gray'
    };

    return createDOMElement('completion-label', style);
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
  var addStyle = window.App.Utils.addStyle;
  var moment = window.moment;

  window.App.Widgets.CompletionLabel = CompletionLabel;

}());
