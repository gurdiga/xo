'use strict';

var ui = document.querySelector('[component-name="UI"]');
var test = tape;

test('UI', function(t) {
  t.ok(ui, 'UI was rendered');

  var button = ui.querySelector('[component-name="NewCaseButton"]');
  t.ok(button, 'a NewCaseButton is expected');

  button.click();
  var dialog = ui.querySelector('[component-name="NewCaseDialog"]');
  t.ok(dialog, 'a NewCaseDialog is expected');

  var closeButton = dialog.querySelector('[data-test-id="close-button"]');
  t.ok(closeButton, 'the dialog should have a CloseButton');

  closeButton.click();

  dialog = ui.querySelector('[component-name="NewCaseDialog"]');
  t.notok(dialog, 'CloseButton button should have closed the NewCaseDialog');

  t.end();
});
