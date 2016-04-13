(function() {
  'use strict';

  var BUTTON_FONT_SIZE = '13px';

  function DropdownButton(labelText, options, additionalStyle) {
    var domElement = createElement(additionalStyle);

    var toggleButton = createButton();
    domElement.appendChild(toggleButton);

    var optionList = new OptionList(options);
    optionList.appendTo(domElement);

    toggleButton.addEventListener('click', optionList.toggle);
    document.body.addEventListener('keydown', optionList.hide);
    document.body.addEventListener('click', optionList.hide);

    this.appendTo = getAppenderOf(domElement);

    function createButton() {
      var style = {
        fontSize: BUTTON_FONT_SIZE
      };

      var button = createDOMElement('button', style);

      button.textContent = labelText;

      return button;
    }
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

  var OptionList = window.App.Widgets.OptionList;

  var getAppenderOf = window.App.Utils.getAppenderOf;
  var makeTextUselectable = window.App.Utils.makeTextUselectable;
  var createDOMElement = window.App.Utils.createDOMElement;

  window.App.Widgets.DropdownButton = DropdownButton;

}());
