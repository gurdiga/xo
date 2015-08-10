(function() {
  'use strict';

  var NewCaseDialog = window.App.Widgets.NewCaseDialog;
  var test = tape;

  test('NewCaseDialog', function(t) {
    var newCaseDialogWidget = render(e(NewCaseDialog, {isOpened: true}));

    var dialogHeader = getDialogHeaderText(newCaseDialogWidget);
    t.equal(dialogHeader.textContent, 'Procedură de ordin general', 'the header has the appropriate text');
    t.equal(getFontSize(dialogHeader), '32px', 'the header has the appropriate font size');

    t.end();
    removeFromDOM();

    function render(widget) {
      var sandbox = document.createElement('div');
      document.body.appendChild(sandbox);

      return React.render(widget, sandbox);
    }

    function removeFromDOM() {
      document.body.removeChild(newCaseDialogWidget.getDOMNode().parentNode);
    }

    function getDialogHeaderText(newCaseDialogWidget) {
      return newCaseDialogWidget.getDOMNode().querySelector('h1');
    }

    function getFontSize(domElement) {
      return window.getComputedStyle(domElement).fontSize;
    }
  });

}());
