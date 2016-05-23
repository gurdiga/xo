describe('NewCaseButton', function() {
  'use strict';

  var NewCaseButton = window.App.Widgets.NewCaseButton;

  var sandbox, newCaseButton, onClick;

  before(function() {
    onClick = createSpy();

    sandbox = document.createElement('div');
    newCaseButton = new NewCaseButton();
    newCaseButton.onClick(onClick);
    newCaseButton.appendTo(sandbox);
  });

  it('has the appropriate label', function() {
    var button = sandbox.querySelector('button');
    assert.equal(button.textContent, 'Procedură nouă', 'has the label “Procedură nouă”');
  });

  it('has the appropriate style', function() {
    var css = sandbox.querySelector('button').style;
    assert.equal(css.padding, '0.5em 1em', 'has appropriate padding');
    assert.equal(css.fontWeight, 'bold', 'has bold text');
    assert.equal(css.fontSize, '1.5em', 'has 1.5em font size');
    assert.equal(css.backgroundColor, 'white', 'has white background color');
    assert.equal(css.border, '1px solid rgb(204, 204, 204)', 'has a thing gray border');
    assert.equal(css.borderRadius, '5px', 'has a slightly rounded corners');
  });

  it('works', function() {
    var button = sandbox.querySelector('button');
    button.click();

    assert(onClick.calls.length, 1, 'triggers the onClick function');
  });

  var createSpy = window.TestHelpers.createSpy;
  var assert = window.TestHelpers.assert;
});
