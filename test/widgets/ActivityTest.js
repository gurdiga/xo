(function() {
  'use strict';

  tape('Activity', function(t) {
    var sandbox = document.createElement('div');

    var widgetName = 'SomeActivity';
    var descriptionText = 'Case institution';
    var detailWidgets = [
      document.createElement('some-widget'),
      new TextFieldInput()
    ];
    var activity = new Activity(widgetName, descriptionText, detailWidgets);
    activity.appendTo(sandbox);

    t.equal(activity.getDescription(), descriptionText, 'exposes a gettr for the description text');

    var domElement = sandbox.firstChild;

    t.test('DOM structure', function(t) {
      t.equal(domElement.tagName, 'FIELDSET', 'is a fieldset');
      t.equal(domElement.getAttribute('widget-name'), widgetName, 'is an “Activity” widget');

      t.end();
    });

    t.test('styling', function(t) {
      var css = domElement.style;

      t.equal(css.marginTop, '5px', 'make room after section title to stand out as a unit');
      t.equal(css.marginBottom, '10px',
        'make room between activities so that it’s clear at' +
        ' a glance where one ends and other begins');
      t.equal(css.borderWidth, '0px', 'removes the iframe’s default border');
      t.equal(css.padding, '0px', 'removes the iframe’s default padding');

      t.end();
    });

    t.test('date field', function(t) {
      var dateField = domElement.firstChild;
      t.equal(dateField.tagName, 'ACTIVITY-DATE-FIELD', 'is the appropriate widget');

      t.end();
    });

    t.test('description', function(t) {
      var descriptionElement = domElement.children[1];

      t.equal(descriptionElement.tagName, 'ACTIVITY-DESCRIPTION', 'has the appropriate tag name');
      t.equal(descriptionElement.textContent, descriptionText, 'has the appropriate text');

      t.end();
    });

    t.test('details section', function(t) {
      var detailsSectionElement = domElement.children[2];
      t.equal(detailsSectionElement.getAttribute('widget-name'), 'ActivityDetailsSection',
        'has the appropriate “widget-name” attribute');

      var children = detailsSectionElement.children;
      t.equal(children[0], detailWidgets[0], 'contains the passed detail widgets');
      t.equal(children[1].tagName, 'INPUT', 'contains the passed detail widgets');

      t.end();
    });

    t.end();
  });

  var Activity = window.App.Widgets.Activity;
  var TextFieldInput = window.App.Widgets.TextFieldInput;

}());
