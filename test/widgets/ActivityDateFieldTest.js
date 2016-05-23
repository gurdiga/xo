describe('ActivityDateField', function() {
  'use strict';

  var ActivityDateField = window.App.Widgets.ActivityDateField;

  var sandbox, activityDateField, domElement;

  beforeEach(function() {
    sandbox = document.createElement('div');
    activityDateField = new ActivityDateField();
    activityDateField.appendTo(sandbox);

    domElement = sandbox.firstChild;
  });

  it('has the appropriate DOM structure', function() {
    assert.equal(domElement.tagName, 'ACTIVITY-DATE-FIELD', 'has the appropriate tag name');
  });

  it('has an input', function() {
    var input = domElement.querySelector('input');
    assert.equal(input.style.width, '6.5em', 'the  date field is a bit narrower than labeled fields');
  });

  var assert = window.TestHelpers.assert;
});
