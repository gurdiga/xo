import {appendWidgets} from "app/utils/appendWidgets";
import {WidgetRole} from "app/widgets/WidgetRole";
import {OptionList} from "app/widgets/OptionList";
import {makeTextUselectable} from "app/utils/makeTextUselectable";
import {createDOMElement} from "app/utils/createDOMElement";
import {delegateTo} from "app/utils/delegateTo";
import {addFocusEffect} from "app/utils/addFocusEffect";
import {hideOnEscapeOrOutsideClick} from "app/utils/hideOnEscapeOrOutsideClick";
import {ifKey} from "app/utils/ifKey";

export function DropdownButton(labelText, options) {
  var domElement = createElement();
  WidgetRole.apply(this, [domElement]);

  var toggleButton = createToggleButton(labelText);
  var optionList = new OptionList(options);

  appendWidgets([toggleButton, optionList]).to(domElement);
  addEventListeners(toggleButton, optionList);

  this.resetOptionList = delegateTo(optionList, 'setOptions');
}

function createElement() {
  var style = {
    display: 'inline-block'
  };

  var domElement = createDOMElement('dropdown-button', style);

  makeTextUselectable(domElement);

  return domElement;
}

function createToggleButton(labelText) {
  var style = {
    padding: '5px 25px 5px 10px',
    outline: 'none',
    border: '1px solid silver',
    borderRadius: '10px',
    fontSize: '13px',
    backgroundImage: 'url("data:image/svg+xml;utf8,' +
        '<svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"8\\" height=\\"8\\">' +
          '<polygon points=\\"0,0 8,0 4,8\\" style=\\"fill:black\\" />' +
        '</svg>' +
      '")',
    backgroundPositionY: '50%',
    backgroundPositionX: 'calc(100% - 10px)',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'transparent'
  };

  var button = createDOMElement('button', style);

  button.textContent = labelText;

  return button;
}

function addEventListeners(toggleButton, optionList) {
  toggleButton.addEventListener('click', optionList.toggle);
  toggleButton.addEventListener('keydown', ifKey('ArrowDown', selectFirstOption));
  toggleButton.addEventListener('keydown', ifKey('ArrowUp', selectLastOption));
  toggleButton.addEventListener('keydown', ifKey('Enter', optionList.executeSelectedOption));
  hideOnEscapeOrOutsideClick(optionList);

  addFocusEffect(toggleButton, {
    boxShadow: 'rgb(181, 213, 255) 0px 0px 3px 2px'
  });

  function selectFirstOption() {
    optionList.show();
    optionList.selectNext();
  }

  function selectLastOption() {
    optionList.show();
    optionList.selectPrevious();
  }
}
