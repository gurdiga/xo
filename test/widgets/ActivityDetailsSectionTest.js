describe('ActivityDetailsSection', function() {
  'use strict';

  var ActivityDetailsSection = window.App.Widgets.ActivityDetailsSection;

  var activityDetailsSection, domElement;

  before(function() {
    activityDetailsSection = new ActivityDetailsSection();
    domElement = getWidgetDOMElement(activityDetailsSection);
  });

  it('has the appropriate DOM structure', function() {
    assert.equal(domElement.tagName, 'ACTIVITY-DETAILS-SECTION', 'has a corresponding tag name');
    assert.equal(domElement.getAttribute('role'), 'region', 'has an appropriate role attribute');
  });

  it('can be setChildWidgets()', function() {
    activityDetailsSection.setChildWidgets([
      document.createElement('another-widget')
    ]);
    assert.equal(domElement.children.length, 1, 'has the appropriate number of child elements');
    assert.equal(domElement.children[0].tagName, 'ANOTHER-WIDGET', 'the first child is rendered');
  });

  var assert = window.TestHelpers.assert;
  var getWidgetDOMElement = window.TestHelpers.getWidgetDOMElement;
});
