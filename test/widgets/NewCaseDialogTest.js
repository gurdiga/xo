(function() {
  'use strict';

  var NewCaseDialog = window.App.Widgets.NewCaseDialog;
  var test = tape;

  var sandbox = document.createElement('div');
  document.body.appendChild(sandbox);

  var newCaseDialog = new NewCaseDialog();
  newCaseDialog.appendTo(sandbox);

  test('NewCaseDialog', function(t) {
    var domElement = sandbox.querySelector('new-case-dialog');
    t.ok(domElement, 'renders a <new-case-dialog/>');

    var css = window.getComputedStyle(domElement);
    t.equal(css.display, 'block', 'has display:block');
    t.equal(css.backgroundColor, 'rgb(255, 255, 255)', 'has white background');
    t.equal(css.width, '960px', 'is 960px wide');
    t.equal(css.padding, '50px', 'has 50px of padding');

    t.test('the title', function(t) {
      var title = domElement.querySelector(':scope>h1');
      t.ok(title, 'exists');
      t.equal(title.textContent, 'Procedură de ordin general', 'has the appropriate text');

      var css = window.getComputedStyle(title);
      t.equal(css.fontSize, '42px', 'has the appropriate font size');
      t.equal(css.fontFamily, 'TitleFont', 'has the appropriate font family');
      t.equal(css.fontWeight, 'bold', 'has the appropriate font weight');

      t.end();
    });

    t.test('the date field', function(t) {
      var dateField = domElement.querySelector(':scope>date-field');
      t.ok(dateField, 'exists');
      t.end();
    });

    t.test('the creditor section', function(t) {
      var creditorSection = domElement.querySelector(':scope>person-section:first-of-type');
      t.ok(creditorSection, 'exists');

      var label = creditorSection.querySelector('legend').textContent;
      t.equal(label, 'Creditorul', 'has the appropriate label');

      var personType = creditorSection.querySelector('select:first-of-type').value;
      t.equal(personType, PersonSection.PERSON_TYPES.COMPANY, 'has the appropriate person type');

      t.end();
    });

    t.end();
  });

  var PersonSection = window.App.Widgets.PersonSection;

}());
