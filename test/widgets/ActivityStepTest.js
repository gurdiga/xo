describe('ActivityStep', function() {
  'use strict';

  var ActivityStep = window.App.Widgets.ActivityStep;

  var activityStep, stepId, description, domElement;

  beforeEach(function() {
    stepId = 'emit-writ';
    description = 'Emitere încheiere';
    activityStep = new ActivityStep(stepId, description);
    domElement = getWidgetDOMElement(activityStep);
  });

  it('has the appropriate DOM structure', function() {
    assert.equal(domElement.tagName, 'ACTIVITY-STEP', 'has the appropriate tag name');
    assert.equal(domElement.getAttribute('step-id'), stepId, 'has the appropriate “step-id” attribute');

    var checkbox = domElement.querySelector('labeled-checkbox input[type="checkbox"]');
    assert.isNotTrue(checkbox.checked, 'is unchecked initially');

    var checkboxLabel = domElement.querySelector('labeled-checkbox label');
    assert.equal(checkboxLabel.textContent, description, 'has the appropriate description');
  });

  it('can be asked to getValue', function() {
    var expectedValue = {
      'step-id': stepId,
      'is-completed': false
    };

    assert.deepEqual(activityStep.getValue(), expectedValue);
  });

  it('can be asked to setValue', function() {
    var newValue = {
      'is-completed': true
    };

    activityStep.setValue(newValue);
    assert.deepEqual(activityStep.getValue()['is-completed'], newValue['is-completed']);
  });

  var assert = window.TestHelpers.assert;
  var getWidgetDOMElement = window.TestHelpers.getWidgetDOMElement;
});
