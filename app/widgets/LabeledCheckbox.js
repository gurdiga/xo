(function() {
  'use strict';

  function LabeledCheckbox() {
    var domElement = createElement();

    this.appendTo = getAppenderOf(domElement);
  }

  function createElement() {
    return createDOMElement('labeled-checkbox');
  }

  var getAppenderOf = window.App.Utils.getAppenderOf;
  var createDOMElement = window.App.Utils.createDOMElement;

  window.App.Widgets.LabeledCheckbox = LabeledCheckbox;
}());
