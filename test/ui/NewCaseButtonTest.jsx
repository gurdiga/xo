'use strict';

var NewCaseButton = require('../../app/ui/NewCaseButton.js');
var test = tape;

var sandbox = document.createElement('div');
React.render(
  e(NewCaseButton, {onClick: onClick}),
  sandbox
);

function onClick() {
  onClick.executed = true;
}

test('NewCaseButton', function(t) {
  var button = sandbox.querySelector('button');
  t.ok(button, 'renders a <button>');
  t.equal(button.textContent, 'Procedură nouă', 'has the label “Procedură nouă”');

  t.end();
});

test('NewCaseButton CSS', function(t) {
  document.body.appendChild(sandbox);

  var css = window.getComputedStyle(sandbox.querySelector('button'));
  t.equal(css.padding, '12px 24px', 'has appropriate padding');
  t.equal(css.fontWeight, 'bold', 'has bold text');
  t.equal(css.fontSize, '24px', 'has 1.5em font size');
  t.equal(css.backgroundColor, 'rgb(255, 255, 255)', 'has white background color');
  t.equal(css.border, '1px solid rgb(204, 204, 204)', 'has a thing gray border');
  t.equal(css.borderRadius, '5px', 'has a slightly rounded corners');

  document.body.removeChild(sandbox);
  t.end();
});

test('NewCaseButton behavior', function(t) {
  document.body.appendChild(sandbox);

  var button = sandbox.querySelector('button');
  button.click();
  t.ok(onClick.executed, 'triggers the onClick function');

  document.body.removeChild(sandbox);
  t.end();
});
