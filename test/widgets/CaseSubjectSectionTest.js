(function() {
  'use strict';

  var CaseSubjectSection = window.App.Widgets.CaseSubjectSection;

  var sandbox = document.createElement('div');
  var additionalStyle = { width: '450px' };
  var fieldValues = {};
  var sentenceSubjectSection = new CaseSubjectSection(fieldValues, additionalStyle);
  sentenceSubjectSection.appendTo(sandbox);

  tape.test('CaseSubjectSection', function(t) {
    var domElement = sandbox.firstChild;

    t.ok(domElement, 'exists');
    t.equal(domElement.tagName, 'SENTENCE-SUBJECT-SECTION', 'has sentence-subject-section tag');

    var css = domElement.style;
    t.equal(css.display, 'inline-block',
      'has inline-block display to flow along with the other sections');
    t.equal(css.width, additionalStyle.width, 'accepts additional CSS as the 3rd argument');

    var labelText = domElement.querySelector('legend').textContent;
    t.equal(labelText, 'Obiectul urmăririi', 'section has the appropriate label');

    t.test('fields', function(t) {
      var fields = domElement.querySelectorAll('fieldset>:not(legend)');

      var firstField = fields[0];
      t.ok(firstField, 'first field exists');
      t.equal(firstField.tagName, 'SELECT-FIELD', 'is a select-field');
      t.equal(getLabel(firstField), 'Obiectul urmăririi', 'has the appropriate label');

      var options = getOptionTexts(firstField.querySelector('select'));
      t.deepEqual(options, CaseSubjectSection.SUBJECT_OPTIONS, 'has subject types as options');

      t.end();
    });

    t.end();
  });

  var getOptionTexts = window.TestHelpers.getOptionTexts;
  var getLabel = window.TestHelpers.getLabel;

}());
