(function() {
  'use strict';

  var NewCaseDialog = window.App.Widgets.NewCaseDialog;
  var test = tape;

  var sandbox = document.createElement('div');
  document.body.appendChild(sandbox);

  var newCaseDialog = new NewCaseDialog({
    creditorul: {},
    debitorul: {}
  });
  newCaseDialog.appendTo(sandbox);

  test('NewCaseDialog', function(t) {
    var dialogHeader = sandbox.querySelector('new-case-dialog>h1');
    t.equal(dialogHeader.textContent, 'Procedură de ordin general', 'the header has the appropriate text');

    var css = window.getComputedStyle(dialogHeader);
    t.equal(css.fontSize, '42px', 'the header has the appropriate font size');
    t.equal(css.fontFamily, 'TitleFont', 'the header has the appropriate font family');

    var creditorSection = sandbox.querySelector('new-case-dialog>person-section');
    t.ok(creditorSection, 'there is person section');

    document.body.removeChild(sandbox);
    t.end();
  });

}());
