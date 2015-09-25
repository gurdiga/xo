(function() {
  'use strict';

  var SentenceSection = window.App.Widgets.SentenceSection;
  var sentenceSection = new SentenceSection();

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

      var documentNumberField = fieldElements[1];
      t.equal(documentNumberField.tagName, 'TEXT-FIELD', 'the second field is a text-field');
      t.equal(getLabel(documentNumberField), 'Numărul documentului', 'the second field is “Numărul documentului”');

      var sentenceDateField = fieldElements[2];
      t.equal(sentenceDateField.tagName, 'DATE-FIELD', 'the third field is a date-field');
      t.equal(getLabel(sentenceDateField), 'Data hotărîrii', 'the third field is “Data hotărîrii”');

      var conclusionField = fieldElements[3];
      t.equal(conclusionField.tagName, 'LARGE-TEXT-FIELD', 'the fourth field is a large-text-field');
      t.equal(getLabel(conclusionField), 'Dispozitivul',
        'the fourth field is “Dispozitivul”');

      var finalSentenceDateFiels = fieldElements[4];
      t.equal(finalSentenceDateFiels.tagName, 'DATE-FIELD', 'the fifth field is a date-field');
      t.equal(getLabel(finalSentenceDateFiels), 'Data rămînerii definitive',
        'the fifth field is “Data rămînerii definitive”');

      var releaseDateField = fieldElements[5];
      t.equal(releaseDateField.tagName, 'DATE-FIELD', 'the sixth field is a date-field');
      t.equal(getLabel(releaseDateField), 'Data eliberării',
        'the sixth field is “Data eliberării”');

      t.end();

      function getLabel(field) {
        return field.querySelector('label>span').textContent;
      }
    });

    t.end();
  });

}());
