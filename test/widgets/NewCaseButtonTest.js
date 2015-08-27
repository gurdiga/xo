(function() {
  'use strict';

  var NewCaseButton = window.App.Widgets.NewCaseButton;
  var test = tape;

  var sandbox = document.createElement('div');
  var newCaseButton = new NewCaseButton();
  newCaseButton.onClick(onClick);
  newCaseButton.appendTo(sandbox);

  function onClick() {
    onClick.executed = true;
  }

  document.body.appendChild(sandbox);

  test('NewCaseButton', function(t) {
    var button = sandbox.querySelector('button');
    t.ok(button, 'renders a <button>');
    t.equal(button.textContent, 'Procedură nouă', 'has the label “Procedură nouă”');

    t.end();
  });

  test('NewCaseButton CSS', function(t) {
    var css = sandbox.querySelector('button').style;
    t.equal(css.padding, '0.5em 1em', 'has appropriate padding');
    t.equal(css.fontWeight, 'bold', 'has bold text');
    t.equal(css.fontSize, '1.5em', 'has 1.5em font size');
    t.equal(css.backgroundColor, 'white', 'has white background color');
    t.equal(css.border, '1px solid rgb(204, 204, 204)', 'has a thing gray border');
    t.equal(css.borderRadius, '5px', 'has a slightly rounded corners');

    t.end();
  });

  test('NewCaseButton behavior', function(t) {
    var button = sandbox.querySelector('button');
    button.click();
    t.ok(onClick.executed, 'triggers the onClick function');

    document.body.removeChild(sandbox);
    t.end();
  });

}());
