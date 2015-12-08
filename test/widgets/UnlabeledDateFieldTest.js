(function() {
  'use strict';

  var UnlabeledDateField = window.App.Widgets.UnlabeledDateField;
  var test = tape;

  var sandbox = document.createElement('div');
  var unlabeledDateField = new UnlabeledDateField();
  unlabeledDateField.appendTo(sandbox);

  test('UnlabeledDateField', function(t) {
    var domElement = sandbox.firstChild;

    t.ok(domElement, 'exists');
    t.equal(domElement.tagName, 'UNLABELED-DATE-FIELD', 'has the appropriate tag name');

    t.end();
  });

}());
