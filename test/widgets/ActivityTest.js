(function() {
  'use strict';

  var Activity = window.App.Widgets.Activity;
  var TextFieldInput = window.App.Widgets.TextFieldInput;

  var descriptionText = 'Case institution';
  var detailWidgets = [
    document.createElement('some-widget'),
    new TextFieldInput()
  ];
  var activity = new Activity(descriptionText, detailWidgets);
  var sandbox = document.createElement('div');
  activity.appendTo(sandbox);
  document.body.appendChild(sandbox); // TODO: remove me

  tape('Activity', function(t) {
    var domElement = sandbox.firstChild;

    t.equal(domElement.tagName, 'FIELDSET', 'is a fieldset');
    t.equal(domElement.getAttribute('widget'), 'Activity', 'is an “Activity” widget');

    t.test('styling', function(t) {
      var css = domElement.style;

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
      t.equal(detailsSectionElement.getAttribute('widget'), 'ActivityDetailsSection', 'is the appropriate widget');

      var children = detailsSectionElement.children;
      t.equal(children[0], detailWidgets[0], 'contains the passed detail widgets');
      t.equal(children[1].tagName, 'INPUT', 'contains the passed detail widgets');

      t.end();
    });

    t.end();
  });

}());
