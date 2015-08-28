(function() {
  'use strict';

  var AddPersonButton = window.App.Widgets.AddPersonButton;
  var test = tape;

  var sandbox = document.createElement('div');

  var labelText = '+persoană';
  var addPersonButton = new AddPersonButton(labelText);
  addPersonButton.appendTo(sandbox);

  addPersonButton.onClick(onClick);

  function onClick() {
    onClick.executed = true;
  }

  test('AddPersonButton', function(t) {
    var button = sandbox.querySelector('button');
    t.ok(button, 'renders a button');
    t.equal(button.textContent, labelText, 'has the given label');

    t.end();
  });

  test('AddPersonButton behavior', function(t) {
    var button = sandbox.querySelector('button');
    button.click();
    t.ok(onClick.executed, 'triggers the onClick function');

    t.end();
  });

}());
