describe('Activity2', function() {
  'use strict';

  var Activity2 = window.App.Widgets.Activity2;

  var activity, widgetName, labelText, domElement, container, label, dateField;

  beforeEach(function() {
    widgetName = 'MyMoreSpecificWidget';
    labelText = 'Some activity';
    activity = new Activity2(widgetName, labelText);
    domElement = getWidgetDOMElement(activity);
    container = domElement.firstChild;
    label = container.children[0];
    dateField = container.children[1];
  });

  it('has the appropriate DOM structure', function() {
    assert.equal(domElement.tagName, 'SECTION', 'uses a semantic HTML5 tag name');
    assert.equal(domElement.getAttribute('widget-name'), widgetName, 'has the appropriate widget name');
    assert.equal(container.getAttribute('widget-name'), 'LabeledContainer', 'has a container');
    assert.equal(label.textContent, labelText, 'has the appropriate label text');
    assert.equal(dateField.tagName, 'DATE-FIELD', 'has a date field');
  });

  it('has the appropriate label style', function() {
    assert.equal(label.style.fontSize, '16px', 'has the appropriate font size');
    assert.equal(label.style.fontWeight, 'bold', 'has the appropriate font weight');

    var dateInput = dateField.firstChild;
    assert.equal(dateInput.style.width, '6.5em', 'has the appropriate width for the date input');
  });

  it('can be asked to appendWidgets', function() {
    var childWidgets = [
      new LabeledTextField('I am a text field')
    ];
    var childWidgetsDOMElements = childWidgets.map(getWidgetDOMElement);

    activity.appendWidgets(childWidgets);
    assert.equal(container.children[2], childWidgetsDOMElements[0], 'contains the appended widget');
  });

  it('can be asked to createWithData', function() {
    var data = {
      'widget-name': widgetName,
      'label-text': labelText
    };
    var activity = Activity2.createWithData(data);

    assert.instanceOf(activity, Activity2, 'creates an instance');

    domElement = getWidgetDOMElement(activity);
    label = domElement.children[0];
    assert.equal(label.textContent, labelText, 'has the appropriate label text');
  });

  var LabeledTextField = window.App.Widgets.LabeledTextField;

  var assert = window.TestHelpers.assert;
  var getWidgetDOMElement = window.TestHelpers.getWidgetDOMElement;
});
