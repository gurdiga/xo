'use strict';

var ui = document.querySelector('ui');
var test = tape;

test('UI', function(t) {
  t.ok(ui, 'UI was rendered');

  var dialog = ui.querySelector('new-case-dialog');
  t.ok(dialog, 'a NewCaseDialog is expected');
  t.equal(dialog.style.display, 'none', 'NewCaseDialog is hidden initially');

  var button = ui.querySelector('ui>button');
  t.ok(button, 'a NewCaseButton is expected');

  button.click();
  dialog = ui.querySelector('new-case-dialog');
  t.equal(dialog.style.display, 'block', 'NewCaseDialog is displayed by the button');

  var closeButton = dialog.querySelector('new-case-dialog>button');
  t.ok(closeButton, 'the dialog should have a CloseButton');
  closeButton.click();

  t.equal(dialog.style.display, 'none', 'CloseButton button should have closed the NewCaseDialog');

  t.end();
});
