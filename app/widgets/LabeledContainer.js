(function() {
  'use strict';

  function LabeledContainer(labelText) {
    var label = createLabel(labelText);
    var domElement = createElement(label);

    this.appendTo = getAppenderOf(domElement);
    this.setStyle = getStylerOf(domElement);
    this.setLabelStyle = getStylerOf(label);
  }

  function createElement(label) {
    var style = {
      'border': 'none',
      'font': 'inherit',
      'padding': '0px'
    };
    var domElement = createDOMElement('fieldset', style);

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
  var getStylerOf = window.App.Utils.getStylerOf;

  window.App.Widgets.LabeledContainer = LabeledContainer;

}());
