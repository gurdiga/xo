(function() {
  'use strict';

  function LabeledContainer(labelText) {
    var domElement = createElement(labelText);

    this.appendTo = getAppenderOf(domElement);
  }

  function createElement(labelText) {
    var style = {
      'border': 'none',
      'font': 'inherit',
      'padding': '0px'
    };
    var domElement = createDOMElement('fieldset', style);
    var label = createLabel(labelText);

    domElement.appendChild(label);

    return domElement;
  }

  function createLabel(labelText) {
    var style = {
      'font': 'inherit'
    };

    var label = createDOMElement('legend', style);

    label.textContent = labelText;

    return label;
  }

  var createDOMElement = window.App.Utils.createDOMElement;
  var getAppenderOf = window.App.Utils.getAppenderOf;

  window.App.Widgets.LabeledContainer = LabeledContainer;

}());
