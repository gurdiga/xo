(function() {
  'use strict';

  var BUTTON_FONT_SIZE = '13px';

  function DropdownButton(labelText, options, additionalStyle) {
    var domElement = createElement(additionalStyle);

    var toggleButton = createToggleButton();
    domElement.appendChild(toggleButton);

    var optionList = new OptionList(options);
    optionList.appendTo(domElement);

    toggleButton.addEventListener('click', optionList.toggle);
    document.body.addEventListener('keydown', optionList.hide);
    document.body.addEventListener('click', optionList.hide);

    this.appendTo = getAppenderOf(domElement);

    function createToggleButton() {
      var style = {
        padding: '5px 25px 5px 10px',
        border: '1px solid silver',
        borderRadius: '10px',
        fontSize: BUTTON_FONT_SIZE,
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
