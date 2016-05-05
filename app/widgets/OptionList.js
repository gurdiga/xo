(function() {
  'use strict';

  OptionList.INITIAL_OPTION_BUTTON_STYLE = {
    backgroundColor: 'transparent'
  };

  OptionList.HOVER_OPTION_BUTTON_STYLE = {
    backgroundColor: 'rgb(195, 195, 195)'
  };


  function OptionList(options) {
    var domElement = createElement();

    addOptionButtons(this, options, domElement);

    this.appendTo = getAppenderOf(domElement);

    this.setOptions = function(options) {
      empty(domElement);
      addOptionButtons(this, options, domElement);
    };

    this.show = function() {
      show(domElement);
    };

    this.hide = function() {
      hide(domElement);
      if (selectedOptionIndex !== undefined) unselectCurrentlySelectedOption();
    };

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

    function isAnyOptionSelected() {
      return selectedOptionIndex !== undefined;
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

  function createElement() {
    var style = {
      position: 'absolute',
      display: 'none',
      marginLeft: '10px',
      backgroundColor: 'white',
      boxShadow: 'rgba(0, 0, 0, 0.298039) 1px 1px 3px'
    };

    var attributes = {
      'widget-name': 'OptionList'
    };

    return createDOMElement('div', style, attributes);
  }

  function addOptionButtons(optionList, options, domElement) {
    var optionButtons = _.map(options, function(optionHandler, optionLabel) {
      return createOptionButton(optionList, optionLabel, optionHandler);
    });

    appendWidgets(optionButtons).to(domElement);
  }

  function empty(domElement) {
    domElement.innerHTML = '';
  }

  function createOptionButton(optionList, labelText, optionHandler) {
    var style = _.extend({
      padding: '5px 10px',
      borderWidth: '0px',
      fontSize: '13px',
      width: '100%',
      textAlign: 'left'
    }, OptionList.INITIAL_OPTION_BUTTON_STYLE);

    var button = createDOMElement('button', style);

    button.textContent = labelText;

    button.addEventListener('click', function() {
      optionList.hide();
      optionHandler();
    });

    addHoverEffect(button, OptionList.HOVER_OPTION_BUTTON_STYLE);

    return button;
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

  var getAppenderOf = window.App.Utils.getAppenderOf;
  var createDOMElement = window.App.Utils.createDOMElement;
  var addHoverEffect = window.App.Utils.addHoverEffect;
  var appendWidgets = window.App.Utils.appendWidgets;
  var addStyle = window.App.Utils.addStyle;

  window.App.Widgets.OptionList = OptionList;

}());
