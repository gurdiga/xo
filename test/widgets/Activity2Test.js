describe('Activity2', function() {
  'use strict';

  var Activity2 = window.App.Widgets.Activity2;

  var activity, labelText, domElement, label;

  beforeEach(function() {
    labelText = 'Some activity';
    activity = new Activity2(labelText);
    domElement = getWidgetDOMElement(activity);
    label = domElement.firstChild;
  });

  it('has the appropriate DOM structure', function() {
    assert.equal(domElement.getAttribute('widget-name'), 'LabeledContainer', 'has a container');
    assert.equal(label.textContent, labelText, 'has the appropriate label text');
  });

  var assert = window.TestHelpers.assert;
  var getWidgetDOMElement = window.TestHelpers.getWidgetDOMElement;
});
