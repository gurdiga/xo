(function() {
  'use strict';

  var ui = document.querySelector('ui');

  tape('UI', function(t) {
    var dialog = ui.querySelector('new-case-dialog');
    t.equal(dialog.style.display, 'none', 'NewCaseDialog is hidden initially');

    var button = ui.querySelector('ui>button');
    button.click();
    dialog = ui.querySelector('new-case-dialog');
    t.equal(dialog.style.display, 'block', 'NewCaseDialog is displayed by the button');

    var closeButton = dialog.querySelector('new-case-dialog>button');
    closeButton.click();
    t.equal(dialog.style.display, 'none', 'CloseButton button should have closed the NewCaseDialog');

    t.end();
  });

}());
