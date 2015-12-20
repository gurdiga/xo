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
    t.equal(domElement.tagName, 'INQUIRY-ACTIVITY', 'exists');

    t.test('date field', function(t) {
      var dateField = domElement.firstChild;

      t.ok(dateField, 'exists');
      t.equal(dateField.tagName, 'DATE-FIELD', 'is an unlabeled data field');

      var input = dateField.querySelector('input');
      t.equal(input.style.width, '6.5em', 'the  date field is a bit narrower than labeled fields');

      t.end();
    });

    t.test('description', function(t) {
      var descriptionElement = domElement.children[1];

      t.ok(descriptionElement, 'exists');
      t.equal(descriptionElement.textContent, 'Cererea creditorului',
        'has the approriate text');

      t.test('styling', function(t) {
        var css = descriptionElement.style;

        t.equal(css.fontSize, '16px', 'has just a bit larger font size to stand out');
        t.equal(css.marginLeft, '0.5em', 'keeps some space at the left');
        t.equal(css.verticalAlign, '-1px', 'align vertically with the text in the field');

        t.end();
      });

      t.end();
    });

    t.test('details section', function(t) {
      var detailsSectionElement = domElement.children[2];

      t.ok(detailsSectionElement, 'exists');
      t.equal(detailsSectionElement.tagName, 'FIELDSET', 'has the approriate tag name');

      var inquiryRegistrationNumberField = detailsSectionElement.children[0];
      t.ok(inquiryRegistrationNumberField, 'has a field for the inquiry registration number');
      t.equal(inquiryRegistrationNumberField.tagName, 'LABELED-TEXT-FIELD', 'has the approriate tag name');

      t.end();
    });

    t.end();
  });

}());
