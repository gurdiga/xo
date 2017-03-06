import {Activity} from "app/widgets/Activity";
import {assert, getWidgetDOMElement} from "test/helper";

describe('Activity', function() {
  'use strict';

  var widgetName, descriptionText, activity, domElement, detailsSectionElement;

  before(function() {
    widgetName = 'SomeActivity';
    descriptionText = 'Case institution';
    activity = new Activity(widgetName, descriptionText);
    domElement = getWidgetDOMElement(activity);
    detailsSectionElement = domElement.children[2];
  });

  it('has the appropriate DOM structure', function() {
    assert.equal(domElement.tagName, 'FIELDSET', 'is a fieldset');
    assert.equal(domElement.getAttribute('widget-name'), widgetName, 'is an “Activity” widget');

    var dateField = domElement.children[1];
    assert.equal(dateField.tagName, 'ACTIVITY-DATE-FIELD', 'has a date field');

    assert.equal(detailsSectionElement.tagName, 'ACTIVITY-DETAILS-SECTION',
      'has a container for the activity-specific widgets and content');
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

  it('has the appropriate description', function() {
    var descriptionElement = domElement.children[0];

    assert.equal(descriptionElement.tagName, 'ACTIVITY-TITLE', 'has the appropriate tag name');
    assert.equal(descriptionElement.textContent, descriptionText, 'has the appropriate text');
    assert.equal(activity.getDescription(), descriptionText, 'exposes a gettr for the description text');
  });

  it('can be asked to setDetailWidgets', function() {
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
});
