(function() {
  'use strict';

  var NewCaseDialogRaw = window.App.Widgets.NewCaseDialogRaw;
  var test = tape;

  var sandbox = document.createElement('div');
  document.body.appendChild(sandbox);

  test('NewCaseDialog', function(t) {
    var newCaseDialog = new NewCaseDialogRaw({
      creditorul: {},
      debitorul: {}
    });
    newCaseDialog.appendTo(sandbox);

    var dialogHeader = getDialogHeaderText();
    t.equal(dialogHeader.textContent, 'Procedură de ordin general', 'the header has the appropriate text');
    t.equal(getFontSize(dialogHeader), '32px', 'the header has the appropriate font size');

    document.body.removeChild(sandbox);
    t.end();

    function getDialogHeaderText() {
      return sandbox.querySelector('h1');
    }

    function getFontSize(domElement) {
      return window.getComputedStyle(domElement).fontSize;
    }
  });

}());
