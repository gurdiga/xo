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

    var css = domElement.style;
    t.equal(css.display, 'block', 'has display:block');
    t.equal(css.backgroundColor, 'white', 'has white background');
    t.equal(css.width, '960px', 'is 960px wide');
    t.equal(css.padding, '50px', 'has 50px of padding');
    t.equal(css.border, '1px solid rgb(221, 221, 221)', 'has a border');
    t.equal(css.boxShadow, 'rgba(0, 0, 0, 0.298039) 2px 2px 7px', 'has a nice box shadow');

    t.test('the title', function(t) {
      var title = domElement.querySelector(':scope>h1');
      t.ok(title, 'exists');
      t.equal(title.textContent, 'Procedură de ordin general', 'has the appropriate text');

      var css = title.style;
      t.equal(css.fontSize, '42px', 'has the appropriate font size');
      t.equal(css.fontFamily, 'TitleFont', 'has the appropriate font family');
      t.equal(css.fontWeight, 'bold', 'has the appropriate font weight');

      t.end();
    });

    t.test('the date field', function(t) {
      var dateField = domElement.querySelector(':scope>date-field');
      t.ok(dateField, 'exists');

      var input = dateField.querySelector('input');
      var css = input.style;
      t.equal(css.width, '100px', 'is not as wide as sections');
      t.equal(css.marginBottom, '10px', 'has a little bottom spacing not to stick to Creditor section');

      t.end();
    });

    t.test('the creditor section', function(t) {
      var creditorSection = domElement.querySelector(':scope>person-section:first-of-type');
      t.ok(creditorSection, 'exists');

      var css = creditorSection.style;
      t.equal(css.width, '380px', 'is 380px wide');

      var label = creditorSection.querySelector('legend').textContent;
      t.equal(label, 'Creditor', 'has the appropriate label');

      var personType = creditorSection.querySelector('select:first-of-type').value;
      t.equal(personType, PersonSection.PERSON_TYPES.COMPANY, 'has the appropriate person type');

      t.end();
    });

    t.test('the debitor section', function(t) {
      var debitorSection = domElement.querySelector(':scope>person-section:nth-of-type(2)');
      t.ok(debitorSection, 'exists');

      var css = debitorSection.style;
      t.equal(css.width, '380px', 'is 380px wide');
      t.equal(css.marginLeft, '60px', 'leaves some breathing room before the Creditor section');

      var label = debitorSection.querySelector('legend').textContent;
      t.equal(label, 'Debitor', 'has the appropriate label');

      var personType = debitorSection.querySelector('select:first-of-type').value;
      t.equal(personType, PersonSection.PERSON_TYPES.INDIVIDUAL, 'has the appropriate person type');

      t.end();
    });

    t.test('add debitor button', function(t) {
      var button = domElement.querySelector('add-person-button');
      t.ok(button, 'exists');
      t.equal(button.textContent, 'adaugă debitor', 'has the appropriate label');

      // TODO: asssert it adds a PersonSection on click

      t.end();
    });

    t.end();
  });

  var PersonSection = window.App.Widgets.PersonSection;

}());
