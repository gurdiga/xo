describe('SentenceSection', function() {
  'use strict';

  var SentenceSection = window.App.Widgets.SentenceSection;

  var fieldValues, sentenceSection, domElement;

  before(function() {
    fieldValues = {
      'instanţa-de-judecată': 'Curtea de Apel Chişinău',
      'numărul-hotărîrii': '2-4765/12',
      'data-hotărîrii': '09.01.2013',
      'dispozitivul': 'De făcut cutare şi cutare.',
      'obiectul-urmăririi': 'instalarea',
      'data-rămînerii-definitive': '10.01.2013',
      'data-eliberării': '11.01.2013'
    };

    sentenceSection = new SentenceSection(fieldValues);
    domElement = getWidgetDOMElement(sentenceSection);
  });

  it('has the appropriate DOM structure', function() {
    var css = domElement.style;
    assert.equal(css.display, 'inline-block', 'has display inline-block');

    var labelText = domElement.querySelector('legend').textContent;
    assert.equal(labelText, 'Document executoriu', 'section has the appropriate label');
  });

  it('can be asked to setStyle', function() {
    var style = {
      'background-color': 'red'
    };

    sentenceSection.setStyle(style);

    assert.equal(domElement.style.backgroundColor, style['background-color'],
      'has the background color set appropriately');
  });

  it('has the appropriate fields', function() {
    var fieldElements = domElement.querySelectorAll('fieldset>:not(legend)');

    var courtField = fieldElements[0];
    assert.equal(courtField.tagName, 'LABELED-SELECT-FIELD', 'the first field is a labeled-select-field');
    assert.equal(getLabel(courtField), 'Instanţa de judecată', 'the first field is “Instanţa de judecată”');
    assert.equal(getDOMValue(courtField), fieldValues['instanţa-de-judecată'],
      'the “Instanţa de judecată” field has preselected the given option');

    var sentenceNumberField = fieldElements[1];
    assert.equal(sentenceNumberField.tagName, 'LABELED-TEXT-FIELD', 'the second field is a labeled-text-field');
    assert.equal(getLabel(sentenceNumberField), 'Numărul hotărîrii', 'the second field is “Numărul hotărîrii”');
    assert.equal(getDOMValue(sentenceNumberField), fieldValues['numărul-hotărîrii'],
      'the “Numărul hotărîrii” field is prefilled with the given value');

    var sentenceDateField = fieldElements[2];
    assert.equal(sentenceDateField.tagName, 'LABELED-DATE-FIELD', 'the third field is a labeled-date-field');
    assert.equal(getLabel(sentenceDateField), 'Data hotărîrii', 'the third field is “Data hotărîrii”');
    assert.equal(getDOMValue(sentenceDateField), fieldValues['data-hotărîrii'],
      'the “Data hotărîrii” field is prefilled with the given value');

    var conclusionField = fieldElements[3];
    assert.equal(conclusionField.tagName, 'LABELED-LARGE-TEXT-FIELD', 'the fourth field is a labeled-large-text-field');
    assert.equal(getLabel(conclusionField), 'Dispozitivul',
      'the fourth field is “Dispozitivul”');
    assert.equal(getDOMValue(conclusionField), fieldValues['dispozitivul'],
      'the “Dispozitivul” field is prefilled with the given value');

    var caseSubjectField = fieldElements[4];
    assert.equal(caseSubjectField.tagName, 'LABELED-SELECT-FIELD', 'the fifth field is a labeled-select-field');
    assert.equal(getLabel(caseSubjectField), 'Obiectul urmăririi',
      'the fifth field is “Obiectul urmăririi”');
    assert.equal(getDOMValue(caseSubjectField), fieldValues['obiectul-urmăririi'],
      'the “Obiectul urmăririi” field is prefilled with the given value');

    var finalSentenceDateField = fieldElements[5];
    assert.equal(finalSentenceDateField.tagName, 'LABELED-DATE-FIELD', 'the sixth field is a labeled-date-field');
    assert.equal(getLabel(finalSentenceDateField), 'Data rămînerii definitive',
      'the sixth field is “Data rămînerii definitive”');
    assert.equal(getDOMValue(finalSentenceDateField), fieldValues['data-rămînerii-definitive'],
      'the “Data rămînerii definitive” field is prefilled with the given value');

    var releaseDateField = fieldElements[6];
    assert.equal(releaseDateField.tagName, 'LABELED-DATE-FIELD', 'the seventh field is a labeled-date-field');
    assert.equal(getLabel(releaseDateField), 'Data eliberării',
      'the sixth field is “Data eliberării”');
    assert.equal(getDOMValue(releaseDateField), fieldValues['data-eliberării'],
      'the “Data eliberării” field is prefilled with the given value');
  });

  it('can tell its value', function() {
    var value = sentenceSection.getValue();

    assert.equal(
      value['instanţa-de-judecată'],
      fieldValues['instanţa-de-judecată'],
      'returns the appropriate value for instanţa-de-judecată'
    );
    assert.equal(
      value['numărul-hotărîrii'],
      fieldValues['numărul-hotărîrii'],
      'returns the appendChild value for numărul-hotărîrii'
    );
    assert.equal(
      value['data-hotărîrii'],
      fieldValues['data-hotărîrii'],
      'returns the appropriate value for data-hotărîrii'
    );
    assert.equal(
      value['dispozitivul'],
      fieldValues['dispozitivul'],
      'returns the appendChild value for dispozitivul'
    );
    assert.equal(
      value['data-rămînerii-definitive'],
      fieldValues['data-rămînerii-definitive'],
      'returns the appropriate value for data-rămînerii-definitive'
    );
    assert.equal(
      value['data-eliberării'],
      fieldValues['data-eliberării'],
      'returns the appendChild value for data-eliberării'
    );
  });

  var getLabel = window.TestHelpers.getLabel;
  var getDOMValue = window.TestHelpers.getDOMValue;
  var assert = window.TestHelpers.assert;
  var getWidgetDOMElement = window.TestHelpers.getWidgetDOMElement;
});
