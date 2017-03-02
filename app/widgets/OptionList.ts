import * as _ from "lodash";
import {WidgetRole} from "app/widgets/WidgetRole";
import {createDOMElement} from "app/utils/createDOMElement";
import {addHoverEffect} from "app/utils/addHoverEffect";
import {addStyle} from "app/utils/addStyle";
import {resetChildren} from "app/utils/resetChildren";

export function OptionList(options) {
  var domElement = createElement();
  WidgetRole.apply(this, [domElement]);

  setOptions(domElement, options);

  this.setOptions = function(options) {
    setOptions(domElement, options);
  };

  this.hide = hideList;

  this.toggle = function(e) {
    e.stopPropagation();

    if (isShown(domElement)) hide(domElement);
    else show(domElement);
  };

  var selectedOptionIndex;

  this.selectNext = function() {
    if (isAnyOptionSelected()) unselectCurrentlySelectedOption();

    selectOpton(getNextOptionIndex());
  };

  this.selectPrevious = function() {
    if (isAnyOptionSelected()) unselectCurrentlySelectedOption();

    selectOpton(getPreviousOptionIndex());
  };

  this.executeSelectedOption = function() {
    if (noOptionSelected()) {
      return;
    }

    var option = domElement.children[selectedOptionIndex];
    option.click();
  };

  function setOptions(domElement, options) {
    var optionButtons = _.map(options, createOptionButton);
    resetChildren(domElement, optionButtons);
  }

  function createOptionButton(optionHandler, labelText) {
    var style = {
      'padding': '5px 10px',
      'border-width': '0px',
      'font-size': '13px',
      'width': '100%',
      'text-align': 'left'
    };

    _.extend(style, OptionList.INITIAL_OPTION_BUTTON_STYLE);

    var button = createDOMElement('button', style);

    button.textContent = labelText;

    button.addEventListener('click', function() {
      hideList();
      optionHandler();
    });

    addHoverEffect(button, OptionList.HOVER_OPTION_BUTTON_STYLE);

    return button;
  }

  function hideList() {
    hide(domElement);

    if (isAnyOptionSelected()) {
      unselectCurrentlySelectedOption();
      selectedOptionIndex = undefined;
    }
  }

  function isAnyOptionSelected() {
    return selectedOptionIndex !== undefined;
  }

  function noOptionSelected() {
    return selectedOptionIndex === undefined;
  }

  function unselectCurrentlySelectedOption() {
    var option = domElement.children[selectedOptionIndex];

    addStyle(option, OptionList.INITIAL_OPTION_BUTTON_STYLE);
  }

  function selectOpton(optionIndex) {
    var option = domElement.children[optionIndex];

    addStyle(option, OptionList.HOVER_OPTION_BUTTON_STYLE);
    selectedOptionIndex = optionIndex;
  }

  var FIRST_OPTION_INDEX = 0;

  function getNextOptionIndex() {
    if (isAnyOptionSelected()) {
      if (selectedOptionIndex === getLastOptionIndex()) {
        return FIRST_OPTION_INDEX;
      } else {
        return selectedOptionIndex + 1;
      }
    } else {
      return FIRST_OPTION_INDEX;
    }
  }

  function getPreviousOptionIndex() {
    if (isAnyOptionSelected()) {
      if (selectedOptionIndex === FIRST_OPTION_INDEX) {
        return getLastOptionIndex();
      } else {
        return selectedOptionIndex - 1;
      }
    } else {
      return getLastOptionIndex();
    }
  }

  function getLastOptionIndex() {
    return domElement.children.length - 1;
  }
}

OptionList.INITIAL_OPTION_BUTTON_STYLE = {
  'background-color': 'transparent'
};

OptionList.HOVER_OPTION_BUTTON_STYLE = {
  'background-color': 'rgb(195, 195, 195)'
};

function createElement() {
  var style = {
    'position': 'absolute',
    'display': 'none',
    'margin-left': '10px',
    'background-color': 'white',
    'box-shadow': 'rgba(0, 0, 0, 0.298039) 1px 1px 3px'
  };

  return createDOMElement('option-list', style);
}

function isShown(domElement) {
  return domElement.style.display === '';
}

function show(domElement) {
  domElement.style.display = '';
}

function hide(domElement) {
  domElement.style.display = 'none';
}
