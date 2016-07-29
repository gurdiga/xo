describe('ActivityStep', function() {
  'use strict';

  var ActivityStep = window.App.Widgets.ActivityStep;

  var activityStep, description, domElement;

  beforeEach(function() {
    description = 'Emitere încheiere';
    activityStep = new ActivityStep(description);
    domElement = getWidgetDOMElement(activityStep);
  });

  it('has the appropriate DOM structure', function() {
    assert.equal(domElement.tagName, 'ACTIVITY-STEP', 'has the appropriate tag name');

    var checkbox = domElement.querySelector('labeled-checkbox input[type="checkbox"]');
    assert.isNotTrue(checkbox.checked, 'is unchecked initially');

    var checkboxLabel = domElement.querySelector('labeled-checkbox label');
    assert.equal(checkboxLabel.textContent, description, 'has the appropriate description');
  });

  it('can be asked to getValue', function() {
    var expectedValue = {
      'is-completed': false
    };

    assert.deepEqual(activityStep.getValue(), expectedValue);
  });

  it('can be asked to setValue', function() {
    var newValue = {
      'is-completed': true
    };

    activityStep.setValue(newValue);
    assert.deepEqual(activityStep.getValue(), newValue);
  });

  var assert = window.TestHelpers.assert;
  var getWidgetDOMElement = window.TestHelpers.getWidgetDOMElement;
});
