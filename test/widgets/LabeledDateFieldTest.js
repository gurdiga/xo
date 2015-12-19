(function() {
  'use strict';

  var LabeledDateField = window.App.Widgets.LabeledDateField;
  var test = tape;

  var sandbox = document.createElement('div');

  var labelText = 'My LabeledDateField component';
  var fieldValue = '22.03.2015';

  var dateField = new LabeledDateField(labelText, fieldValue);
  dateField.appendTo(sandbox);

  test('LabeledDateField', function(t) {
    var label = sandbox.querySelector('label');
    var labelSpan = label.children[0];
    var dateInput = label.children[1];

    t.test('structural element', function(t) {
      t.ok(label, 'it renders a <label> element');

      t.ok(labelSpan, 'the label span exists');
      t.equal(labelSpan.tagName, 'SPAN', 'is a <span/>');
      t.equal(labelSpan.textContent, labelText,
        '<label> contains a <span> with the text given in the “label” attribute');

      t.ok(dateInput, 'the label span exists');
      t.equal(dateInput.tagName, 'DATE-FIELD', 'is a <date-field/>');

      t.end();
    });

    t.test('label layout', function(t) {
      var css = label.style;

      t.equal(css.display, 'inline-block', 'is block-styled because it’s always one per line');
      t.equal(css.margin, '0px 0px 3px 5px', 'has some air to breath at the left and below');

      t.end();
    });

    t.test('label text styling', function(t) {
      var css = labelSpan.style;

      t.equal(css.color, 'rgb(85, 85, 85)', 'is a bit dimmed compared to the input text because it’s less important');
      t.equal(css.fontSize, '14px', 'has the same font size as the <input/>');
      t.equal(css.display, 'inline-block', 'is inline-block to be able to have it’s own width');
      t.equal(css.width, '11em', 'is 11em wide');

      t.end();
    });

    t.end();
  });

}());
