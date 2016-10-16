(function() {
  'use strict';

  function LabeledContainer(labelText) {
    var domElement = createElement();
    WidgetRole.apply(this, [domElement]);

    var label = createLabel(labelText);
    domElement.appendChild(label);

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

  var WidgetRole = window.App.Widgets.WidgetRole;

  var createDOMElement = window.App.Utils.createDOMElement;
  var getStylerOf = window.App.Utils.getStylerOf;
  var resetChildren = window.App.Utils.resetChildren;
  var appendWidgets = window.App.Utils.appendWidgets;

  window.App.Widgets.LabeledContainer = LabeledContainer;

}());
