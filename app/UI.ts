(function() {
  'use strict';

  function UI() {
    var domElement = createElement();

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

  function createElement() {
    var style = {
      display: 'block',
      width: '960px',
      margin: '1em auto',
      position: 'relative'
    };

    return createDOMElement('ui', style);
  }

  var NewCaseDialog = window.App.Widgets.NewCaseDialog;
  var NewCaseButton = window.App.Widgets.NewCaseButton;

  var appendWidgets = window.App.Utils.appendWidgets;
  var getAppenderOf = window.App.Utils.getAppenderOf;
  var createDOMElement = window.App.Utils.createDOMElement;

  window.App.UI = UI;

}());
