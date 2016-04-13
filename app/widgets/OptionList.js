(function() {
  'use strict';

  var BUTTON_FONT_SIZE = '13px';

  function OptionList(options) {
    var domElement = createElement();

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

    var hideOptionList = this.hide;

    function createElement() {
      var style = {
        position: 'absolute',
        display: 'none',
        paddingLeft: '0px',
        marginLeft: '5px',
        marginTop: '0px',
        marginBottom: '0px',
        backgroundColor: 'white',
        boxShadow: 'rgba(0, 0, 0, 0.298039) 1px 1px 3px',
        listStyleType: 'none'
      };

      var domElement = createDOMElement('ul', style);
      var option;

      for (var optionLabel in options) {
        option = createOption(optionLabel, options[optionLabel]);
        domElement.appendChild(option);
      }

      return domElement;
    }

    function createOption(labelText, f) {
      var button = createOptionButton(labelText, f);
      var option = createDOMElement('li');

      option.appendChild(button);

      return option;
    }

    function createOptionButton(labelText, f) {
      var style = {
        fontSize: BUTTON_FONT_SIZE,
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

  var getAppenderOf = window.App.Utils.getAppenderOf;
  var createDOMElement = window.App.Utils.createDOMElement;
  var addHoverEffect = window.App.Utils.addHoverEffect;

  window.App.Widgets.OptionList = OptionList;

}());
