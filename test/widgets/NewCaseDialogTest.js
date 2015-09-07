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
    t.equal(css.paddingTop, '50px', 'has 50px of padding top');
    t.equal(css.paddingRight, '0px', 'has 50px of padding right');
    t.equal(css.paddingBottom, '50px', 'has 50px of padding bottom');
    t.equal(css.paddingLeft, '50px', 'has 50px of padding left');
    t.equal(css.border, '1px solid rgb(221, 221, 221)', 'has a border');
    t.equal(css.boxShadow, 'rgba(0, 0, 0, 0.298039) 2px 2px 7px', 'has a nice box shadow');

    t.test('getValue', function(t) {
      var value = newCaseDialog.getValue();
      t.equal(value['data-înregistrării'], '', 'registration date is returned');
      t.deepEqual(value['creditor'], {
        'gen-persoană': 'juridică',
        'denumire': '',
        'idno': '',
        'sediu': '',
        'persoană-de-contact': '',
        'note': ''
      }, 'creditor section’s value is returned');
      t.deepEqual(value['debitori'], [{
        'gen-persoană': 'fizică',
        'nume': '',
        'idnp': '',
        'data-naşterii': '',
        'domiciliu': '',
        'note': ''
      }], 'debitor section’s value is returned');

      t.end();
    });

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
      t.equal(css.marginRight, '60px', 'leaves some breathing room before the Creditor section');

      var label = debitorSection.querySelector('legend').textContent;
      t.equal(label, 'Debitor', 'has the appropriate label');

      var personType = debitorSection.querySelector('select:first-of-type').value;
      t.equal(personType, PersonSection.PERSON_TYPES.INDIVIDUAL, 'has the appropriate person type');

      t.end();
    });

    t.test('add debitor button', function(t) {
      var button = domElement.querySelector('add-person-button>button');
      t.ok(button, 'exists');
      t.equal(button.textContent, 'adaugă debitor', 'has the appropriate label');

      var lastSection = domElement.querySelector('person-section:last-of-type');
      var personSectionCountBefore = domElement.querySelectorAll('person-section').length;
      var personSectionDataCountBefore = newCaseDialog.getValue()['debitori'].length;
      button.click();
      var personSectionCountAfter = domElement.querySelectorAll('person-section').length;
      var personSectionDataCountAfter = newCaseDialog.getValue()['debitori'].length;

      t.equal(personSectionCountAfter, personSectionCountBefore + 1, 'adds a new person section');
      t.equal(personSectionDataCountAfter, personSectionDataCountBefore + 1,
        'adds a new person data item to “debitori” array');

      var newSection = domElement.querySelector('person-section:last-of-type');
      t.equal(newSection.previousSibling, lastSection, 'is inserted after the previously last PersonSection');
      t.equal(newSection.style.width, '380px', 'the new section has the appropriate width');
      t.equal(newSection.style.marginRight, '60px', 'the new section has the appropriate marginLeft');
      t.equal(newSection.getAttribute('removable'), '', 'the new section is removable');

      var newSectionLabel = newSection.querySelector('legend').textContent;
      t.equal(newSectionLabel, 'Debitor', 'the new section has the appropriate label');

      var removeButton = domElement.querySelector('button[type="remove"]');
      t.ok(removeButton, 'the new section has a remove button');

      personSectionCountBefore = domElement.querySelectorAll('person-section').length;
      personSectionDataCountBefore = newCaseDialog.getValue()['debitori'].length;
      removeButton.click();
      personSectionCountAfter = domElement.querySelectorAll('person-section').length;
      personSectionDataCountAfter = newCaseDialog.getValue()['debitori'].length;

      t.equal(personSectionCountAfter, personSectionCountBefore - 1, 'clicking on the remove button removes the section');
      t.equal(personSectionDataCountAfter, personSectionDataCountBefore - 1,
        'clicking in the remove button removs person data item from “debitori” array');

      t.end();
    });

    t.end();
  });

  var PersonSection = window.App.Widgets.PersonSection;

}());
