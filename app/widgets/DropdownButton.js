(function() {
  'use strict';

  function DropdownButton(labelText, options, additionalStyle) {
    var domElement = createElement(additionalStyle);
    var toggleButton = createToggleButton(labelText);
    var optionList = new OptionList(options);

    appendWidgets([toggleButton, optionList]).to(domElement);
    addEventListeners(toggleButton, optionList);

    this.appendTo = getAppenderOf(domElement);
    this.resetOptionList = delegateTo(optionList, 'setOptions');
  }

  function createElement(additionalStyle) {
    var style = {
      display: 'inline-block'
    };

    _.extend(style, additionalStyle);

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
    hideOnEscapeOrOutsideClick(optionList);

    addFocusEffect(toggleButton, {
      boxShadow: 'rgb(181, 213, 255) 0px 0px 3px 2px'
    });

    function selectFirstOption() {
      optionList.show();
      optionList.selectNext();
    }
  }

  var OptionList = window.App.Widgets.OptionList;

  var getAppenderOf = window.App.Utils.getAppenderOf;
  var makeTextUselectable = window.App.Utils.makeTextUselectable;
  var createDOMElement = window.App.Utils.createDOMElement;
  var appendWidgets = window.App.Utils.appendWidgets;
  var delegateTo = window.App.Utils.delegateTo;
  var addFocusEffect = window.App.Utils.addFocusEffect;
  var hideOnEscapeOrOutsideClick = window.App.Utils.hideOnEscapeOrOutsideClick;
  var ifKey = window.App.Utils.ifKey;

  window.App.Widgets.DropdownButton = DropdownButton;

}());
