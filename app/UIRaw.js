(function() {
  'use strict';

  function UIRaw() {
    var domElement = document.createElement('ui');
    domElement.style.display = 'block';
    _.extend(domElement.style, style);

    var newCaseDialog = new NewCaseDialogRaw({
      creditorul: {},
      debitorul: {}
    });
    newCaseDialog.appendTo(domElement);

    var newCaseButton = new NewCaseButtonRaw();
    newCaseButton.onClick(function() {
      newCaseDialog.show();
    });

    appendWidgets([newCaseDialog, newCaseButton]).to(domElement);

    this.appendTo = function(parentDomElement) {
      parentDomElement.appendChild(domElement);
    };
  }

  var style = {
    width: '960px',
    margin: '1em auto',
    position: 'relative'
  };

  var NewCaseDialogRaw = window.App.Widgets.NewCaseDialogRaw;
  var NewCaseButtonRaw = window.App.Widgets.NewCaseButtonRaw;

  var appendWidgets = window.App.Utils.appendWidgets;

  window.App.UIRaw = UIRaw;

}());
