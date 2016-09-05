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

    this.appendWidgets = function(childWidgets) {
      appendWidgets(childWidgets).to(domElement);
    };
  }

  function createElement() {
    var style = {
      'border': 'none',
      'font': 'inherit',
      'padding': '0px'
    };

    var attributes = {
      'widget-name': 'LabeledContainer'
    };

    return createDOMElement('fieldset', style, attributes);
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
  var appendWidgets = window.App.Utils.appendWidgets;

  window.App.Widgets.LabeledContainer = LabeledContainer;

}());