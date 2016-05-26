describe('ActivityDetailsSection', function() {
  'use strict';

  var ActivityDetailsSection = window.App.Widgets.ActivityDetailsSection;

  var domElement;

  beforeEach(function() {
    var sandbox = document.createElement('div');

    var activityDetailsSection = new ActivityDetailsSection([
      document.createElement('first-child-widget'),
      new LabeledTextField()
    ]);

    activityDetailsSection.appendTo(sandbox);
    domElement = sandbox.firstChild;
  });

  it('has the appropriate DOM structure', function() {
    assert.equal(domElement.getAttribute('widget-name'), 'ActivityDetailsSection',
      'has the appropriate “widget-name” attribute value');
  });

  it('has the appropriate layout', function() {
    var css = domElement.style;

    assert.equal(css.marginLeft, '100px', 'is indented to align with the description');
    assert.equal(css.padding, '0px', 'has no padding');
  });

  it('has the appropriate style', function() {
    var css = domElement.style;
    assert.equal(css.borderWidth, '0px', 'has no visible border');
  });

  it('renders the given widgets', function() {
    assert.equal(domElement.children[0].tagName, 'FIRST-CHILD-WIDGET', 'the first child is rendered');
    assert.equal(domElement.children[1].tagName, 'LABELED-TEXT-FIELD', 'the other child is rendered');
  });

  var LabeledTextField = window.App.Widgets.LabeledTextField;

  var assert = window.TestHelpers.assert;
});
