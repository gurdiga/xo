(function() {
  'use strict';

  var SentenceSection = window.App.Widgets.SentenceSection;

  var fieldValues = {
    'instanţa-de-judecată': 'Curtea de Apel Chişinău',
    'numărul-hotărîrii': '2-4765/12',
    'data-hotărîrii': '09.01.2013',
    'dispozitivul': 'De făcut cutare şi cutare.',
    'obiectul-urmăririi': 'instalarea',
    'data-rămînerii-definitive': '10.01.2013',
    'data-eliberării': '11.01.2013'
  };
  var additionalStyles = {
    width: '380px',
    marginRight: '60px'
  };

  var sentenceSection = new SentenceSection(fieldValues, additionalStyles);

  var sandbox = document.createElement('div');
  sentenceSection.appendTo(sandbox);

  tape('SentenceSection', function(t) {
    var domElement = sandbox.firstChild;
    var css = domElement.style;
    t.equal(css.display, 'inline-block', 'has display inline-block');

    var labelText = domElement.querySelector('legend').textContent;
    t.equal(labelText, 'Document executoriu', 'section has the appropriate label');

    t.test('can be inserted after a given DOM element', function(t) {
      var firstChild = document.createElement('first-child');
      var secondElement = document.createElement('second-child');
      sandbox.appendChild(firstChild);
      sandbox.appendChild(secondElement);

      sentenceSection.insertAfter(firstChild);
      t.equal(domElement.previousSibling, firstChild, 'it’s inserted after the first element');

      sentenceSection.insertAfter(secondElement);
      t.equal(domElement.previousSibling, secondElement, 'can also insert after the last element');

      t.end();
    });

    t.test('fields', function(t) {
      var fieldElements = sandbox.querySelectorAll('fieldset>:not(legend)');

      var courtField = fieldElements[0];
      t.equal(courtField.tagName, 'LABELED-SELECT-FIELD', 'the first field is a labeled-select-field');
      t.equal(getLabel(courtField), 'Instanţa de judecată', 'the first field is “Instanţa de judecată”');
      t.equal(getValue(courtField), fieldValues['instanţa-de-judecată'],
        'the “Instanţa de judecată” field has preselected the given option');

      var sentenceNumberField = fieldElements[1];
      t.equal(sentenceNumberField.tagName, 'LABELED-TEXT-FIELD', 'the second field is a labeled-text-field');
      t.equal(getLabel(sentenceNumberField), 'Numărul hotărîrii', 'the second field is “Numărul hotărîrii”');
      t.equal(getValue(sentenceNumberField), fieldValues['numărul-hotărîrii'],
        'the “Numărul hotărîrii” field is prefilled with the given value');

      var sentenceDateField = fieldElements[2];
      t.equal(sentenceDateField.tagName, 'LABELED-DATE-FIELD', 'the third field is a labeled-date-field');
      t.equal(getLabel(sentenceDateField), 'Data hotărîrii', 'the third field is “Data hotărîrii”');
      t.equal(getValue(sentenceDateField), fieldValues['data-hotărîrii'],
        'the “Data hotărîrii” field is prefilled with the given value');

      var conclusionField = fieldElements[3];
      t.equal(conclusionField.tagName, 'LABELED-LARGE-TEXT-FIELD', 'the fourth field is a labeled-large-text-field');
      t.equal(getLabel(conclusionField), 'Dispozitivul',
        'the fourth field is “Dispozitivul”');
      t.equal(getValue(conclusionField), fieldValues['dispozitivul'],
        'the “Dispozitivul” field is prefilled with the given value');

      var caseSubjectField = fieldElements[4];
      t.equal(caseSubjectField.tagName, 'LABELED-SELECT-FIELD', 'the fifth field is a labeled-select-field');
      t.equal(getLabel(caseSubjectField), 'Obiectul urmăririi',
        'the fifth field is “Obiectul urmăririi”');
      t.equal(getValue(caseSubjectField), fieldValues['obiectul-urmăririi'],
        'the “Obiectul urmăririi” field is prefilled with the given value');

      var finalSentenceDateField = fieldElements[5];
      t.equal(finalSentenceDateField.tagName, 'LABELED-DATE-FIELD', 'the sixth field is a labeled-date-field');
      t.equal(getLabel(finalSentenceDateField), 'Data rămînerii definitive',
        'the sixth field is “Data rămînerii definitive”');
      t.equal(getValue(finalSentenceDateField), fieldValues['data-rămînerii-definitive'],
        'the “Data rămînerii definitive” field is prefilled with the given value');

      var releaseDateField = fieldElements[6];
      t.equal(releaseDateField.tagName, 'LABELED-DATE-FIELD', 'the seventh field is a labeled-date-field');
      t.equal(getLabel(releaseDateField), 'Data eliberării',
        'the sixth field is “Data eliberării”');
      t.equal(getValue(releaseDateField), fieldValues['data-eliberării'],
        'the “Data eliberării” field is prefilled with the given value');

      t.end();
    });

    t.test('additional style', function(t) {
      var css = domElement.style;
      t.equal(css.width, additionalStyles.width, 'accepts additional style: width');
      t.equal(css.marginRight, additionalStyles.marginRight, 'accepts additional style: marginRight');

      t.end();
    });

    t.test('getValue', function(t) {
      var value = sentenceSection.getValue();

      t.equal(
        value['instanţa-de-judecată'],
        fieldValues['instanţa-de-judecată'],
        'returns the appropriate value for instanţa-de-judecată'
      );
      t.equal(
        value['numărul-hotărîrii'],
        fieldValues['numărul-hotărîrii'],
        'returns the appendChild value for numărul-hotărîrii'
      );
      t.equal(
        value['data-hotărîrii'],
        fieldValues['data-hotărîrii'],
        'returns the appropriate value for data-hotărîrii'
      );
      t.equal(
        value['dispozitivul'],
        fieldValues['dispozitivul'],
        'returns the appendChild value for dispozitivul'
      );
      t.equal(
        value['data-rămînerii-definitive'],
        fieldValues['data-rămînerii-definitive'],
        'returns the appropriate value for data-rămînerii-definitive'
      );
      t.equal(
        value['data-eliberării'],
        fieldValues['data-eliberării'],
        'returns the appendChild value for data-eliberării'
      );

      t.end();
    });

    t.end();
  });

  var getLabel = window.TestHelpers.getLabel;
  var getValue = window.TestHelpers.getValue;

}());
