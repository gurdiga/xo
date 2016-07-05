describe('Activity', function() {
  'use strict';

  var Activity = window.App.Widgets.Activity;

  var widgetName, descriptionText, detailWidgets, activity, domElement, detailsSectionElement;

  before(function() {
    var sandbox = document.createElement('div');

    widgetName = 'SomeActivity';
    descriptionText = 'Case institution';
    detailWidgets = [
      document.createElement('some-widget'),
      new TextFieldInput()
    ];
    activity = new Activity(widgetName, descriptionText, detailWidgets);
    activity.appendTo(sandbox);
    domElement = sandbox.firstChild;
    detailsSectionElement = domElement.children[2];
  });

  it('has the appropriate DOM structure', function() {
    assert.equal(domElement.tagName, 'FIELDSET', 'is a fieldset');
    assert.equal(domElement.getAttribute('widget-name'), widgetName, 'is an “Activity” widget');
  });

  it('has the appropriate style', function() {
    var css = domElement.style;

    assert.equal(css.marginTop, '5px', 'make room after section title to stand out as a unit');
    assert.equal(css.marginBottom, '10px',
      'make room between activities so that it’s clear at' +
      ' a glance where one ends and other begins');
    assert.equal(css.borderWidth, '0px', 'removes the iframe’s default border');
    assert.equal(css.padding, '0px', 'removes the iframe’s default padding');
  });

  it('has a date field', function() {
    var dateField = domElement.firstChild;
    assert.equal(dateField.tagName, 'ACTIVITY-DATE-FIELD', 'is the appropriate widget');
  });

  it('has the appropriate description', function() {
    var descriptionElement = domElement.children[1];

    assert.equal(descriptionElement.tagName, 'ACTIVITY-DESCRIPTION', 'has the appropriate tag name');
    assert.equal(descriptionElement.textContent, descriptionText, 'has the appropriate text');
    assert.equal(activity.getDescription(), descriptionText, 'exposes a gettr for the description text');
  });

  it('has the appropriate details section', function() {
    assert.equal(detailsSectionElement.getAttribute('widget-name'), 'ActivityDetailsSection',
      'has the appropriate “widget-name” attribute');

    var children = detailsSectionElement.children;
    assert.equal(children[0], detailWidgets[0], 'contains the passed detail widgets');
    assert.equal(children[1].tagName, 'INPUT', 'contains the passed detail widgets');
  });

  it('can be setDetailWidgets()', function() {
    activity.setDetailWidgets([
      document.createElement('some-other-widget')
    ]);

    var children = detailsSectionElement.children;
    assert.equal(children.length, 1, 'has the appropriate number fo child widgets');
    assert.equal(children[0].tagName, 'SOME-OTHER-WIDGET', 'contains the new widget');
  });

  describe('.createWithData()', function() {
    it('validates input', function() {
      assert.throws(function callingWithNonPlainObject() {
        Activity.createWithData(42);
      },
        'Activity.createWithData expects the argument to be a plain JS object'
      );
    });
  });

  var TextFieldInput = window.App.Widgets.TextFieldInput;

  var assert = window.TestHelpers.assert;
});
