(function() {
  'use strict';

  function LabeledContainer(labelText) {
    var domElement = createElement();
    var label = createLabel(labelText);

    domElement.appendChild(label);

    this.appendTo = getAppenderOf(domElement);
    this.setStyle = getStylerOf(domElement);
    this.setLabelStyle = getStylerOf(label);

    this.setChildWidgets = function(childWidgets) {
      resetChildren(domElement, [label].concat(childWidgets));
    };
  }

  function createElement() {
    var style = {
      'border': 'none',
      'font': 'inherit',
      'padding': '0px'
    };

    return createDOMElement('fieldset', style);
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
  var resetChildren = window.App.Utils.resetChildren;

  window.App.Widgets.LabeledContainer = LabeledContainer;

}());
