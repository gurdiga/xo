(function() {
  'use strict';

  var SentenceSection = window.App.Widgets.SentenceSection;

  var fieldValues = {
    'instanţa-de-judecată': 'TODO',
    'numărul-hotărîrii': '2-4765/12',
    'data-hotărîrii': '09.01.2013',
    'dispozitivul': 'De făcut cutare şi cutare.',
    'data-rămînerii-definitive': '10.01.2013',
    'data-eliberării': '11.01.2013'
  };
  var sentenceSection = new SentenceSection(fieldValues);

  var sandbox = document.createElement('div');
  sentenceSection.appendTo(sandbox);

  tape('SentenceSection', function(t) {
    var domElement = sandbox.querySelector('sentence-section');
    t.ok(domElement, 'exists');

    var css = domElement.style;
    t.equal(css.display, 'inline-block', 'has display inline-block');

    var labelText = domElement.querySelector('legend').textContent;
    t.equal(labelText, 'Documentul executoriu', 'section has the appropriate label');

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
      t.equal(courtField.tagName, 'SELECT-FIELD', 'the first field is a select-field');
      t.equal(getLabel(courtField), 'Instanţa de judecată', 'the first field is “Instanţa de judecată”');

      // TODO: think about how to get all the optins in this select
      //t.equal(getValue(courtField), fieldValues['instanţa-de-judecată'],
      //  'the “Instanţa de judecată” field has preselected the given option');

      var sentenceNumberField = fieldElements[1];
      t.equal(sentenceNumberField.tagName, 'TEXT-FIELD', 'the second field is a text-field');
      t.equal(getLabel(sentenceNumberField), 'Numărul hotărîrii', 'the second field is “Numărul hotărîrii”');
      t.equal(getValue(sentenceNumberField), fieldValues['numărul-hotărîrii'],
        'the “Numărul hotărîrii” field is prefilled with the given value');

      var sentenceDateField = fieldElements[2];
      t.equal(sentenceDateField.tagName, 'DATE-FIELD', 'the third field is a date-field');
      t.equal(getLabel(sentenceDateField), 'Data hotărîrii', 'the third field is “Data hotărîrii”');
      t.equal(getValue(sentenceDateField), fieldValues['data-hotărîrii'],
        'the “Data hotărîrii” field is prefilled with the given value');

      var conclusionField = fieldElements[3];
      t.equal(conclusionField.tagName, 'LARGE-TEXT-FIELD', 'the fourth field is a large-text-field');
      t.equal(getLabel(conclusionField), 'Dispozitivul',
        'the fourth field is “Dispozitivul”');
      t.equal(getValue(conclusionField), fieldValues['dispozitivul'],
        'the “Dispozitivul” field is prefilled with the given value');

      var finalSentenceDateField = fieldElements[4];
      t.equal(finalSentenceDateField.tagName, 'DATE-FIELD', 'the fifth field is a date-field');
      t.equal(getLabel(finalSentenceDateField), 'Data rămînerii definitive',
        'the fifth field is “Data rămînerii definitive”');
      t.equal(getValue(finalSentenceDateField), fieldValues['data-rămînerii-definitive'],
        'the “Data rămînerii definitive” field is prefilled with the given value');

      var releaseDateField = fieldElements[5];
      t.equal(releaseDateField.tagName, 'DATE-FIELD', 'the sixth field is a date-field');
      t.equal(getLabel(releaseDateField), 'Data eliberării',
        'the sixth field is “Data eliberării”');
      t.equal(getValue(releaseDateField), fieldValues['data-eliberării'],
        'the “Data eliberării” field is prefilled with the given value');

      t.end();

      function getLabel(field) {
        return field.querySelector('label>span').textContent;
      }

      function getValue(field) {
        return field.querySelector('input,textarea').value;
      }
    });

    t.test('getValue', function(t) {
      // TODO

      t.end();
    });

    t.end();
  });

}());
