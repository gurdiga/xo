describe('ActivityDetailsSection', function() {
  'use strict';

  var ActivityDetailsSection = window.App.Widgets.ActivityDetailsSection;

  var activityDetailsSection, domElement;

  before(function() {
    activityDetailsSection = new ActivityDetailsSection();
    domElement = getWidgetDOMElement(activityDetailsSection);
  });

  it('has the appropriate DOM structure', function() {
    assert.equal(domElement.getAttribute('widget-name'), 'ActivityDetailsSection',
      'has the appropriate “widget-name” attribute value');
  });

  it('has the appropriate layout', function() {
    var css = domElement.style;

    assert.equal(css.padding, '0px', 'has no padding');
  });

  it('has the appropriate style', function() {
    var css = domElement.style;
    assert.equal(css.borderWidth, '0px', 'has no visible border');
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
