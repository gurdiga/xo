(function() {
  'use strict';

  function CompletionLabel() {
    var domElement = createElement();

    this.appendTo = getAppenderOf(domElement);
  }

  function createElement() {
    return createDOMElement('completion-label');
  }

  var createDOMElement = window.App.Utils.createDOMElement;
  var getAppenderOf = window.App.Utils.getAppenderOf;

  window.App.Widgets.CompletionLabel = CompletionLabel;

}());
