(function() {
  'use strict';

  var InstitutionActivity = window.App.Widgets.InstitutionActivity;

  var sandbox = document.createElement('div');
  var institutionActivity = new InstitutionActivity();
  institutionActivity.appendTo(sandbox);

  tape('InstitutionActivity', function(t) {
    var domElement = sandbox.firstChild;

    t.ok(domElement, 'exists');
    t.equal(domElement.tagName, 'INSTITUTION-ACTIVITY', 'has the appropriate tag name');

    t.test('layout', function(t) {
      var css = domElement.style;
      t.equal(css.display, 'block', 'it’s a container');

      t.end();
    });

    t.test('date field', function(t) {
      var dateField = domElement.firstChild;

      t.ok(dateField, 'exists');
      t.equal(dateField.tagName, 'ACTIVITY-DATE-FIELD', 'is an activity date field');

      t.end();
    });

    t.test('description', function(t) {
      var descriptionElement = domElement.children[1];

      t.ok(descriptionElement, 'exists');
      t.equal(descriptionElement.tagName, 'ACTIVITY-DESCRIPTION', 'has the appropriate tag name');
      t.equal(descriptionElement.textContent, 'Intentarea', 'has the appropriate text');

      t.end();
    });

    t.end();
  });

}());