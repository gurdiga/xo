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
    t.equal(getFontSize(dialogHeader), '32px', 'the header has the appropriate font size');

    var creditorSection = sandbox.querySelector('new-case-dialog>person-section');
    t.ok(creditorSection, 'there is person section');

    function getFontSize(domElement) {
      return window.getComputedStyle(domElement).fontSize;
    }

    document.body.removeChild(sandbox);
    t.end();
  });

}());
