(function() {
  'use strict';

  var test = tape;
  var InquiryActivity = window.App.Widgets.InquiryActivity;

  var sandbox = document.createElement('div');
  var inquiryActivity = new InquiryActivity();
  inquiryActivity.appendTo(sandbox);

  test('InquiryActivity', function(t) {
    var domElement = sandbox.firstChild;

    t.ok(domElement, 'exists');
    t.equal(domElement.tagName, 'INQUIRY-ACTIVITY', 'has the approriate tag name');

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
      t.equal(descriptionElement.textContent, 'Cererea creditorului', 'has the appropriate text');

      t.end();
    });

    t.test('details section', function(t) {
      var detailsSectionElement = domElement.children[2];

      t.ok(detailsSectionElement, 'exists');
      t.equal(detailsSectionElement.tagName, 'FIELDSET', 'has the approriate tag name');

      t.test('inquiry registration number field', function(t) {
        var inquiryRegistrationNumberField = detailsSectionElement.children[0];
        t.ok(inquiryRegistrationNumberField, 'has a field for the inquiry registration number');
        t.equal(inquiryRegistrationNumberField.tagName, 'LABELED-TEXT-FIELD', 'has the approriate tag name');

        var labelElement = inquiryRegistrationNumberField.querySelector('label');
        t.equal(labelElement.textContent, 'Numărul de înregistrare', 'has the approriate label');

        t.end();
      });

      t.end();
    });

    t.end();
  });

}());
