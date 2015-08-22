(function() {
  'use strict';

  function UI() {
    var domElement = document.createElement('ui');
    domElement.style.display = 'block';
    _.extend(domElement.style, style);

    var newCaseDialog = new NewCaseDialog({
      creditorul: {},
      debitorul: {}
    });
    newCaseDialog.appendTo(domElement);

    var newCaseButton = new NewCaseButton();
    newCaseButton.onClick(function() {
      newCaseDialog.show();
    });

    appendWidgets([newCaseDialog, newCaseButton]).to(domElement);

    this.appendTo = getAppenderOf(domElement);
  }

  var style = {
    width: '960px',
    margin: '1em auto',
    position: 'relative'
  };

  var NewCaseDialog = window.App.Widgets.NewCaseDialog;
  var NewCaseButton = window.App.Widgets.NewCaseButton;

  var appendWidgets = window.App.Utils.appendWidgets;
  var getAppenderOf = window.App.Utils.getAppenderOf;

  window.App.UI = UI;

}());
