(function() {
  'use strict';

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
    };

    this.toggle = function(e) {
      e.stopPropagation();

      if (isShown(domElement)) hide(domElement);
      else show(domElement);
    };

    var selectedOptionIndex;

    this.selectNext = function() {
      var nextOptionIndex = getNextOptionIndex(selectedOptionIndex, domElement);

      selectOpton(domElement, nextOptionIndex);
    };
  }

  function getNextOptionIndex(currentlySelectedOptionIndex, domElement) {
    var nextOptionIndex;

    if (currentlySelectedOptionIndex === undefined) {
      nextOptionIndex = 0;
    } else {
      nextOptionIndex = currentlySelectedOptionIndex + 1;

      if (nextOptionIndex === domElement.children.length) {
        nextOptionIndex = 0;
      }
    }

    return nextOptionIndex;
  }

  function selectOpton(domElement, optionIndex) {
    var options = domElement.children[optionIndex];
    options.style.backgroundColor = 'c3c3c3';
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
    var style = {
      padding: '5px 10px',
      borderWidth: '0px',
      backgroundColor: 'transparent',
      fontSize: '13px',
      width: '100%',
      textAlign: 'left'
    };

    var button = createDOMElement('button', style);

    button.textContent = labelText;

    button.addEventListener('click', function() {
      optionList.hide();
      optionHandler();
    });

    addHoverEffect(button, {
      backgroundColor: 'c3c3c3'
    });

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

  window.App.Widgets.OptionList = OptionList;

}());
