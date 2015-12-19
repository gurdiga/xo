(function() {
  'use strict';

  var LabeledDateField = window.App.Widgets.LabeledDateField;
  var test = tape;

  var sandbox = document.createElement('div');
  document.body.appendChild(sandbox);

  var labelText = 'My LabeledDateField component';
  var fieldValue = '22.03.2015';

  var dateField = new LabeledDateField(labelText, fieldValue);
  dateField.appendTo(sandbox);

  test('LabeledDateField label', function(t) {
    var label = sandbox.querySelector('label');
    t.ok(label, 'it renders a <label> element');

    var labelSpan = label.querySelector('span');
    t.equal(labelSpan.textContent, labelText,
      '<label> contains a <span> with the text given in the “label” attribute');

    t.end();
  });

  test('LabeledDateField label layout CSS', function(t) {
    var css = sandbox.querySelector('label').style;
    t.equal(css.display, 'inline-block', 'is block-styled because it’s always one per line');
    t.equal(css.margin, '0px 0px 3px 5px', 'has some air to breath at the left and below');

    t.end();
  });

  test('LabeledDateField label text CSS', function(t) {
    var css = sandbox.querySelector('label>span').style;

    t.equal(css.color, 'rgb(85, 85, 85)', 'is a bit dimmed compared to the input text because it’s less important');
    t.equal(css.fontSize, '14px', 'has the same font size as the <input/>');
    t.equal(css.display, 'inline-block', 'is inline-block to be able to have it’s own width');
    t.equal(css.width, '11em', 'is 11em wide');

    document.body.removeChild(sandbox);
    t.end();
  });

  test('structural elements', function(t) {
    var label = sandbox.querySelector('label');
    var labelSpan = label.children[0];
    var dateInput = label.children[1];

    t.ok(labelSpan, 'the label span exists');
    t.equal(labelSpan.tagName, 'SPAN', 'is a <span/>');

    t.ok(dateInput, 'the label span exists');
    t.equal(dateInput.tagName, 'DATE-FIELD', 'is a <date-field/>');

    t.end();
  });

}());
