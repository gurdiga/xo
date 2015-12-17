(function() {
  'use strict';

  function DropdownButton(labelText, options, additionalStyle) {
    var domElement = createElement(additionalStyle);

    var toggleButton = createButton();
    domElement.appendChild(toggleButton);

    var optionList = createOptionList();
    domElement.appendChild(optionList);

    toggleButton.addEventListener('click', toggleOptionList);
    document.body.addEventListener('keydown', hideOptionList);
    document.body.addEventListener('click', hideOptionList);

    this.appendTo = getAppenderOf(domElement);

    function toggleOptionList(e) {
      e.stopPropagation();

      if (isOptionListShown()) hideOptionList();
      else showOptionList();
    }

    function showOptionList() {
      optionList.style.display = 'block';
    }

    function hideOptionList() {
      optionList.style.display = 'none';
    }

    function isOptionListShown() {
      return optionList.style.display === 'block';
    }

    function createButton() {
      var button = createDOMElement('button');
      button.textContent = labelText;
      return button;
    }

    function createOptionList() {
      var style = {
        position: 'absolute',
        display: 'none',
        paddingLeft: '0px',
        marginTop: '0px',
        marginBottom: '0px',
        backgroundColor: 'white',
        boxShadow: 'rgba(0, 0, 0, 0.298039) 1px 1px 3px',
        listStyleType: 'none'
      };

      var optionList = createDOMElement('ul', style);
      var option;

      for (var optionLabel in options) {
        option = createOption(optionLabel, options[optionLabel]);
        optionList.appendChild(option);
      }

      return optionList;
    }

    function createOption(labelText, f) {
      var button = createOptionButton(labelText, f);
      var option = createDOMElement('li');

      option.appendChild(button);

      return option;
    }

    function createOptionButton(labelText, f) {
      var style = {
        borderWidth: '0px',
        backgroundColor: 'transparent',
        width: '100%',
        textAlign: 'left'
      };

      var button = createDOMElement('button', style);

      button.textContent = labelText;
      button.addEventListener('click', function() {
        hideOptionList();
        f();
      });

      addHoverEffect(button, {
        backgroundColor: 'c3c3c3'
      });

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

  var getAppenderOf = window.App.Utils.getAppenderOf;
  var addHoverEffect = window.App.Utils.addHoverEffect;
  var makeTextUselectable = window.App.Utils.makeTextUselectable;
  var createDOMElement = window.App.Utils.createDOMElement;

  window.App.Widgets.DropdownButton = DropdownButton;

}());
