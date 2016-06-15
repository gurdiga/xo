describe('NewCaseDialog', function() {
  'use strict';

  var NewCaseDialog = window.App.Widgets.NewCaseDialog;

  var sandbox, newCaseDialog, domElement;

  before(function() {
    sandbox = document.createElement('div');
    document.body.appendChild(sandbox);

    var data = {
      'creditor': {},
      'debitori': [{
        'gen-persoană': PersonSection.PERSON_TYPES.INDIVIDUAL
      }],
      'activities': [{
        'widgetClassName': 'InstitutionActivity',
        'date': Date.now(),
        'todo-items': [{
          'id': 'writ-emitted',
          'label': 'Am emis încheiere',
          'isDone': true
        }, {
          'id': 'writ-sent',
          'label': 'Am expediat încheiere',
          'isDone': false
        }]
      }]
    };

    newCaseDialog = new NewCaseDialog(data);
    newCaseDialog.appendTo(sandbox);

    domElement = sandbox.firstChild;
  });

  it('has the appropriate DOM structure', function() {
    assert.equal(domElement.tagName, 'NEW-CASE-DIALOG', 'has the appropriate tag name');
  });

  it('has the appropriate style', function() {
    var css = domElement.style;
    assert.equal(css.display, 'block', 'has display:block');
    assert.equal(css.backgroundColor, 'white', 'has white background');
    assert.equal(css.width, '960px', 'is 960px wide');
    assert.equal(css.paddingTop, '50px', 'has 50px of padding top');
    assert.equal(css.paddingRight, '0px', 'has 50px of padding right');
    assert.equal(css.paddingBottom, '50px', 'has 50px of padding bottom');
    assert.equal(css.paddingLeft, '50px', 'has 50px of padding left');
    assert.equal(css.border, '1px solid rgb(221, 221, 221)', 'has a border');
    assert.equal(css.boxShadow, 'rgba(0, 0, 0, 0.298039) 2px 2px 7px', 'has a nice box shadow');
    assert.equal(css.position, 'relative',
      'is relatively positioned to allow for absolutely positioned children');
  });

  it('can tell its value', function() {
    var value = newCaseDialog.getValue();
    assert.deepEqual(value['creditor'], {
      'gen-persoană': 'juridică',
      'denumire': '',
      'idno': '',
      'sediu': '',
      'persoană-de-contact': '',
      'note': ''
    }, 'creditor section’s value is returned');
    assert.deepEqual(value['debitori'], [{
      'gen-persoană': 'fizică',
      'nume': '',
      'idnp': '',
      'data-naşterii': '',
      'domiciliu': '',
      'note': ''
    }], 'debitor section’s value is returned');
  });

  it('has a title', function() {
    var title = domElement.querySelector(':scope>h1');
    assert.equal(title.textContent, 'Procedură de ordin general', 'has the appropriate text');

    var css = title.style;
    assert.equal(css.fontSize, '42px', 'has the appropriate font size');
    assert.equal(css.fontFamily, 'TitleFont', 'has the appropriate font family');
    assert.equal(css.fontWeight, 'bold', 'has the appropriate font weight');
    assert.equal(css.marginTop, '0px', 'has no spacing ar the top');
  });

  it('has a creditor section', function() {
    var creditorSection = domElement.querySelector(':scope>person-section:first-of-type');
    var css = creditorSection.style;
    assert.equal(css.width, '380px', 'is 380px wide');

    var label = creditorSection.querySelector('legend').textContent;
    assert.equal(label, 'Creditor', 'has the appropriate label');

    var personType = creditorSection.querySelector('select:first-of-type').value;
    assert.equal(personType, PersonSection.PERSON_TYPES.COMPANY, 'has the appropriate person type');
  });

  it('has a debitor section', function() {
    var debitorSection = domElement.querySelector(':scope>person-section:nth-of-type(2)');
    var css = debitorSection.style;
    assert.equal(css.width, '380px', 'is 380px wide');
    assert.equal(css.marginRight, '60px', 'leaves some breathing room before the Creditor section');

    var label = debitorSection.querySelector('legend').textContent;
    assert.equal(label, 'Debitor', 'has the appropriate label');

    var personType = debitorSection.querySelector('select:first-of-type').value;
    assert.equal(personType, PersonSection.PERSON_TYPES.INDIVIDUAL, 'has the appropriate person type');
  });

  describe('button to add new person sections', function() {
    var dropdownButton, actionButtons;
    var personSectionCountBefore,
      personSectionDataCountBefore,
      personSectionCountAfter,
      personSectionDataCountAfter;

    before(function() {
      dropdownButton = domElement.querySelector('dropdown-button');
    });

    it('has the appropriate style', function() {
      var css = dropdownButton.style;
      assert.equal(css.position, 'absolute', 'is positioned absolutely not to disturb section flow');
      assert.equal(css.marginLeft, '-200px', 'uses negative margin to horizontally align with the last person');
      assert.equal(css.marginTop, '360px', 'uses top-margin to position itself at the bottom of the section');
    });

    it('has the appropriate DOM structure', function() {
      var labelText = dropdownButton.querySelector('button').textContent;
      assert.equal(labelText, 'adaugă persoană', 'has the appropriate label');

      actionButtons = _.toArray(dropdownButton.querySelectorAll('div>button'));
      var actionButtonLablels = actionButtons.map(_.property('textContent'));
      assert.deepEqual(actionButtonLablels, ['debitor', 'persoană terţă'], 'options have the appropriate labels');
    });

    it('has an option to add a debitor', function() {
      var addDebitorButton = actionButtons[0];
      var lastSection = domElement.querySelector('person-section:last-of-type');

      personSectionCountBefore = domElement.querySelectorAll('person-section').length;
      personSectionDataCountBefore = newCaseDialog.getValue()['debitori'].length;
      addDebitorButton.click();
      personSectionCountAfter = domElement.querySelectorAll('person-section').length;
      personSectionDataCountAfter = newCaseDialog.getValue()['debitori'].length;

      assert.equal(personSectionCountAfter, personSectionCountBefore + 1, 'adds a new person section');
      assert.equal(personSectionDataCountAfter, personSectionDataCountBefore + 1,
        'adds a new person data item to “debitori” array');

      var newSection = domElement.querySelector('person-section:last-of-type');
      assert.equal(newSection.previousSibling, lastSection, 'is inserted after the previously last PersonSection');
      assert.equal(newSection.style.width, '380px', 'the new section has the appropriate width');
      assert.equal(newSection.style.marginRight, '60px', 'the new section has the appropriate marginLeft');
      assert.equal(newSection.getAttribute('removable'), '', 'the new section is removable');

      var newSectionLabel = newSection.querySelector('legend').textContent;
      assert.equal(newSectionLabel, 'Debitor', 'the new section has the appropriate label');

      var removeButton = domElement.querySelector('button[type="remove"]');

      personSectionCountBefore = domElement.querySelectorAll('person-section').length;
      personSectionDataCountBefore = newCaseDialog.getValue()['debitori'].length;
      removeButton.click();
      personSectionCountAfter = domElement.querySelectorAll('person-section').length;
      personSectionDataCountAfter = newCaseDialog.getValue()['debitori'].length;

      assert.equal(personSectionCountAfter, personSectionCountBefore - 1, 'clicking on the remove button removes the section');
      assert.equal(personSectionDataCountAfter, personSectionDataCountBefore - 1,
        'clicking in the remove button removs person data item from “debitori” array');
    });

    it('has an option to add a third person', function() {
      var addThirdPersonOption = actionButtons[1];
      var lastSection = domElement.querySelector('person-section:last-of-type');

      personSectionCountBefore = domElement.querySelectorAll('person-section').length;
      personSectionDataCountBefore = newCaseDialog.getValue()['persoane-terţe'].length;
      addThirdPersonOption.click();
      personSectionCountAfter = domElement.querySelectorAll('person-section').length;
      personSectionDataCountAfter = newCaseDialog.getValue()['persoane-terţe'].length;

      assert.equal(personSectionCountAfter, personSectionCountBefore + 1, 'adds a new person section');
      assert.equal(personSectionDataCountAfter, personSectionDataCountBefore + 1,
        'adds a new person data item to “persoane-terţe” array');

      var newSection = domElement.querySelector('person-section:last-of-type');
      assert.equal(newSection.previousSibling, lastSection, 'is inserted after the previously last PersonSection');
      assert.equal(newSection.style.width, '380px', 'the new section has the appropriate width');
      assert.equal(newSection.style.marginRight, '60px', 'the new section has the appropriate marginLeft');
      assert.equal(newSection.getAttribute('removable'), '', 'the new section is removable');

      var newSectionLabel = newSection.querySelector('legend').textContent;
      assert.equal(newSectionLabel, 'Persoană terţă', 'the new section has the appropriate label');

      var removeButton = domElement.querySelector('button[type="remove"]');

      personSectionCountBefore = domElement.querySelectorAll('person-section').length;
      personSectionDataCountBefore = newCaseDialog.getValue()['persoane-terţe'].length;
      removeButton.click();
      personSectionCountAfter = domElement.querySelectorAll('person-section').length;
      personSectionDataCountAfter = newCaseDialog.getValue()['persoane-terţe'].length;

      assert.equal(personSectionCountAfter, personSectionCountBefore - 1, 'clicking on the remove button removes the section');
      assert.equal(personSectionDataCountAfter, personSectionDataCountBefore - 1,
        'clicking in the remove button removs person data item from “debitori” array');
    });
  });

  it('has the “Document executoriu” section', function() {
    var sentenceSection = domElement.querySelector('sentence-section');
    var css = sentenceSection.style;

    assert.equal(css.width, '380px', 'the new section has the appropriate width');
    assert.equal(css.marginRight, '60px', 'the new section has the appropriate marginLeft');
    assert.equal(css.verticalAlign, 'top', 'top-align vertically with the other sections');
  });

  it('has the “Cerere de intentare” section', function() {
    var sentenceSection = domElement.querySelector('inquiry-section');
    var css = sentenceSection.style;

    assert.equal(css.width, '380px', 'has the appropriate width');
    assert.equal(css.display, 'inline-block', 'goes next to the other section');
  });

  it('has the “Acţiuni procedurale” section', function() {
    var caseActivitiesSection = domElement.querySelector('case-activities-section');
    var css = caseActivitiesSection.style;
    assert.equal(css.marginRight, '60px', 'has the appropriate marginLeft');
  });

  describe('the close button', function() {
    var closeButton, css;

    before(function() {
      closeButton = domElement.querySelector('button[type="close"]');
      css = closeButton.style;
    });

    it('has the appropriate DOM structure', function() {
      assert.equal(closeButton.textContent, '×', 'has the appropriate label');
      assert.equal(closeButton.title, 'Închide', 'has the appropriate tooltip');
    });

    it('has the appropriate style', function() {
      assert.equal(css.borderWidth, '0px', 'doesn’t have border');
      assert.equal(css.backgroundColor, 'transparent', 'is transparent');
      assert.equal(css.position, 'absolute', 'is absolutely positioned');
      assert.equal(css.top, '0px', 'is positioned at the top');
      assert.equal(css.left, '0px', 'is positioned at the left');
      assert.equal(css.lineHeight, '0.5em', 'has line-height of half a letter');
      assert.equal(css.fontSize, '20px', 'has a large font-size to be approachable');
      assert.equal(css.opacity, '0.3', 'is a bit faded in initially to not stand out too much');
    });

    it('works', function() {
      closeButton.dispatchEvent(new Event('mouseenter'));
      assert.equal(css.opacity, '1', 'fades out on mouseenter');
      closeButton.dispatchEvent(new Event('mouseleave'));
      assert.equal(css.opacity, '0.3', 'fades back in on mouseleave');

      var padding = '10px';
      assert.equal(css.paddingTop, padding, 'has nice padding for better clickability');
      assert.equal(css.paddingRight, padding, 'has nice padding for better clickability');
      assert.equal(css.paddingBottom, padding, 'has nice padding for better clickability');
      assert.equal(css.paddingLeft, padding, 'has nice padding for better clickability');

      var initialDisplay = domElement.style.display;
      closeButton.click();
      assert.equal(domElement.style.display, 'none', 'hides the dialog when clicked');
      domElement.style.display = initialDisplay;
    });
  });

  var PersonSection = window.App.Widgets.PersonSection;

  var assert = window.TestHelpers.assert;
});
