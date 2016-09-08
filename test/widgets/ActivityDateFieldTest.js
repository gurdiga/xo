describe('ActivityDateField', function() {
  'use strict';

  var ActivityDateField = window.App.Widgets.ActivityDateField;

  var activityDateField, domElement;

  before(function() {
    activityDateField = new ActivityDateField();
    domElement = getWidgetDOMElement(activityDateField);
  });

  it('has the appropriate DOM structure', function() {
    assert.equal(domElement.tagName, 'ACTIVITY-DATE-FIELD', 'has the appropriate tag name');
    assert.equal(domElement.firstChild.tagName, 'LABELED-DATE-FIELD', 'wraps a LabeledDateField');

    var label = domElement.querySelector('label');
    assert.equal(label.textContent, 'Data intentării', 'has the appropriate label text');
  });

  it('has the appropriate style', function() {
    var input = domElement.querySelector('input');
    assert.equal(input.style.width, '6.5em', 'the date field is a bit narrower than labeled fields');
  });

  var assert = window.TestHelpers.assert;
  var getWidgetDOMElement = window.TestHelpers.getWidgetDOMElement;
});
