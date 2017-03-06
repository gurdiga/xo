import {LabeledContainer} from "app/widgets/LabeledContainer";
import {LabeledTextField} from "app/widgets/LabeledTextField";
import {LabeledCheckbox} from "app/widgets/LabeledCheckbox";
import {assert, getWidgetDOMElement} from "test/helper";

describe('LabeledContainer', function() {
  'use strict';

  var labeledContainer, domElement, label, labelText;

  beforeEach(function() {
    labelText = 'A generic container';
    labeledContainer = new LabeledContainer(labelText);
    domElement = getWidgetDOMElement(labeledContainer);
    label = domElement.firstChild;
  });

  it('has the appropriate DOM structure', function() {
    assert.equal(domElement.tagName, 'FIELDSET', 'has the appropriate tag name');
    assert.equal(domElement.getAttribute('widget-name'), 'LabeledContainer', 'has the appropriate widget name');
    assert.equal(label.textContent, labelText, 'has the appropriate label text');
  });

  it('has the appropriate default style', function() {
    assert.equal(domElement.style.border, 'none', 'has no border');
    assert.equal(domElement.style.font, 'inherit', 'inherits its font');
    assert.equal(domElement.style.padding, '0px', 'has no padding');

    assert.equal(label.style.font, 'inherit', 'label inherits its font');
  });

  it('can be asked to setStyle', function() {
    var style = {
      'margin-left': '20px'
    };

    labeledContainer.setStyle(style);
    assert.equal(domElement.style.marginLeft, style['margin-left'], 'margin left is set');
  });

  it('can be asked to setLabelStyle', function() {
    var labelStyle = {
      'font-weight': 'bold'
    };

    labeledContainer.setLabelStyle(labelStyle);
    assert.equal(label.style.fontWeight, labelStyle['font-weight'], 'font weight is set');
  });

  it('can be asked to setChildWidgets', function() {
    var childWidgets = [
      new LabeledCheckbox('I am a checkbox'),
      new LabeledTextField('This is a textbox')
    ];
    var childWidgetDOMElements = childWidgets.map(getWidgetDOMElement);

    labeledContainer.setChildWidgets(childWidgets);
    assert.equal(domElement.children[1], childWidgetDOMElements[0],
      'first child widget is container’s second child in the DOM (first is the label)');
    assert.equal(domElement.children[2], childWidgetDOMElements[1],
      'second child widget is container’s third child in the DOM');

    var newChildWidgets = [
      new LabeledTextField('This is another text field')
    ];
    var newChildWidgetsDOMElements = newChildWidgets.map(getWidgetDOMElement);

    labeledContainer.setChildWidgets(newChildWidgets);
    assert.equal(domElement.children[1], newChildWidgetsDOMElements[0],
      'when asking to setChildWidgets again, new widgets replace the old ones');
    assert.equal(domElement.children.length, newChildWidgetsDOMElements.length + 1,
      'container has the appropriate number of children');
  });

  it('can be asked to appendWidgets', function() {
    var childWidgets = [
      new LabeledCheckbox('I am a checkbox'),
      new LabeledTextField('This is a textbox')
    ];
    var childWidgetDOMElements = childWidgets.map(getWidgetDOMElement);

    labeledContainer.appendWidgets([
      childWidgets[0]
    ]);

    labeledContainer.appendWidgets([
      childWidgets[1]
    ]);

    assert.equal(domElement.children[1], childWidgetDOMElements[0]);
    assert.equal(domElement.children[2], childWidgetDOMElements[1]);
  });
});
