(function() {
  'use strict';

  var BUTTON_FONT_SIZE = '13px';

  function OptionList(options) {
    var domElement = createElement(this, options);

    this.appendTo = getAppenderOf(domElement);

    this.isShown = function() {
      return domElement.style.display === 'block';
    };

    this.show = function() {
      domElement.style.display = 'block';
    }.bind(this);

    this.hide = function() {
      domElement.style.display = 'none';
    }.bind(this);

    this.toggle = function(e) {
      e.stopPropagation();

      if (this.isShown()) this.hide();
      else this.show();
    }.bind(this);
  }

  function createElement(optionList, options) {
    var style = {
      position: 'absolute',
      display: 'none',
      marginLeft: '10px',
      backgroundColor: 'white',
      boxShadow: 'rgba(0, 0, 0, 0.298039) 1px 1px 3px'
    };

    var domElement = createDOMElement('div', style);
    var button;

    for (var optionLabel in options) {
      button = createOptionButton(optionList, optionLabel, options[optionLabel]);
      domElement.appendChild(button);
    }

    domElement.setAttribute('widget-name', 'OptionList');

    return domElement;
  }

  function createOptionButton(optionList, labelText, f) {
    var style = {
      padding: '5px 10px',
      borderWidth: '0px',
      backgroundColor: 'transparent',
      fontSize: BUTTON_FONT_SIZE,
      width: '100%',
      textAlign: 'left'
    };

    var button = createDOMElement('button', style);

    button.textContent = labelText;
    button.addEventListener('click', function() {
      optionList.hide();
      f();
    });

    addHoverEffect(button, {
      backgroundColor: 'c3c3c3'
    });

    return button;
  }

  var getAppenderOf = window.App.Utils.getAppenderOf;
  var createDOMElement = window.App.Utils.createDOMElement;
  var addHoverEffect = window.App.Utils.addHoverEffect;

  window.App.Widgets.OptionList = OptionList;

}());
