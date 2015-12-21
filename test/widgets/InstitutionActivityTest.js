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
      t.equal(dateField.tagName, 'DATE-FIELD', 'is an unlabeled data field');

      var input = dateField.querySelector('input');
      t.equal(input.style.width, '6.5em', 'the  date field is a bit narrower than labeled fields');

      t.end();
    });

    t.end();
  });

}());
