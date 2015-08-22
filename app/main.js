'use strict';

var UI = window.App.UI;
var uiContainer = document.getElementById('ui');

React.render(e(UI), uiContainer);

var data = {
  creditorul: {},
  debitorul: {}
};

var dialog = new window.App.Widgets.NewCaseDialogRaw(data);
dialog.appendTo(uiContainer.firstElementChild);
