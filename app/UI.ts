import {appendWidgets} from "app/utils/appendWidgets";
import {NewCaseDialog} from "app/widgets/NewCaseDialog";
import {NewCaseButton} from "app/widgets/NewCaseButton";
import {getAppenderOf} from "app/utils/getAppenderOf";
import {createDOMElement} from "app/utils/createDOMElement";

export function UI() {
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
