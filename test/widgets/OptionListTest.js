describe('OptionList', function() {
  'use strict';

  var OptionList = window.App.Widgets.OptionList;

  var optionHandler1, optionHandler2, options, optionList, domElement, optionButton1, optionButton2;
  var OPTION_BUTTON_HOVER_BACKGROUND = OptionList.HOVER_OPTION_BUTTON_STYLE['background-color'];
  var OPTION_BUTTON_INITIAL_BACKGROUND = OptionList.INITIAL_OPTION_BUTTON_STYLE['background-color'];

  before(function() {
    optionHandler1 = createSpy();
    optionHandler2 = createSpy();
    options = {
      'label1': optionHandler1,
      'label2': optionHandler2
    };

    optionList = new OptionList(options);

    domElement = getWidgetDOMElement(optionList);
    optionButton1 = domElement.children[0];
    optionButton2 = domElement.children[1];
  });

  it('has the appropriate DOM structure', function() {
    assert.equal(domElement.tagName, 'OPTION-LIST', 'has the appropriate widget name');

    var optionLabels = _.toArray(domElement.children).map(_.property('textContent'));
    assert.deepEqual(optionLabels, Object.keys(options), 'option buttons have the expected labels');
  });

  it('is styled appropriately', function() {
    var style = domElement.style;

    assert.equal(style.marginLeft, '10px', 'shifts the option list a bit inside to suggest containment');
    assert.equal(style.backgroundColor, 'white', 'has white background');
    assert.equal(style.position, 'absolute', 'is absolutely positioned');
    assert.equal(style.boxShadow, 'rgba(0, 0, 0, 0.298039) 1px 1px 3px', 'has a nice shadow');
  });

  it('has the option buttons styled appropriately', function() {
    var style = optionButton1.style;

    assert.equal(style.padding, '5px 10px', 'has nice padding to increase clickable area');
    assert.equal(style.borderWidth, '0px', 'removes the border off option buttons');
    assert.equal(style.backgroundColor, 'transparent', 'inherits the background from the container');
    assert.equal(style.width, '100%', 'makes buttons 100% wide');
    assert.equal(style.textAlign, 'left', 'aligns button labels left');
    assert.equal(style.fontSize, '13px', 'has a nice large font size');

    optionButton1.dispatchEvent(new Event('mouseenter'));
    assert.equal(optionButton1.style.backgroundColor, OPTION_BUTTON_HOVER_BACKGROUND,
      'options backgroun change to gray on mouseenter');

    optionButton1.dispatchEvent(new Event('mouseleave'));
    assert.equal(optionButton1.style.backgroundColor, OPTION_BUTTON_INITIAL_BACKGROUND,
      'options backgroun change back to normal on on mouseleave');
  });

  it('works', function() {
    optionButton1.click();
    optionButton1.click();
    assert.deepEqual(optionHandler1.calls.length, 2, 'clicking on an option calls its corresponding handler');

    optionButton2.click();
    assert.deepEqual(optionHandler2.calls.length, 1, 'clicking on an option calls its corresponding handler');
  });

  it('accepts commands to select the previous and next option', function() {
    optionList.selectNext();
    assert.equal(optionButton1.style.backgroundColor, OPTION_BUTTON_HOVER_BACKGROUND,
      'selectNext selects the first option initially');

    optionList.selectNext();
    assert.equal(optionButton1.style.backgroundColor, OPTION_BUTTON_INITIAL_BACKGROUND,
      'selectNext selects the option next to the currently selected one');
    assert.equal(optionButton2.style.backgroundColor, OPTION_BUTTON_HOVER_BACKGROUND,
      'selectNext selects the option next to the currently selected one');

    optionList.selectNext();
    assert.equal(optionButton1.style.backgroundColor, OPTION_BUTTON_HOVER_BACKGROUND,
      'when the last option is selected selectNext goes around to the first');
    assert.equal(optionButton2.style.backgroundColor, OPTION_BUTTON_INITIAL_BACKGROUND,
      'when the last option is selected selectNext unselects it');

    optionList.selectPrevious();
    assert.equal(optionButton1.style.backgroundColor, OPTION_BUTTON_INITIAL_BACKGROUND,
      'when the first option is selected selectPrevious unselects it');
    assert.equal(optionButton2.style.backgroundColor, OPTION_BUTTON_HOVER_BACKGROUND,
      'when the first option is selected selectPrevious goess around to the last');

    optionList.selectPrevious();
    assert.equal(optionButton1.style.backgroundColor, OPTION_BUTTON_HOVER_BACKGROUND,
      'selectPrevious selects the option that is above the currently selected one');
    assert.equal(optionButton2.style.backgroundColor, OPTION_BUTTON_INITIAL_BACKGROUND,
      'selectPrevious unselects the option that was selected');

    optionList.hide();
    assert.equal(optionButton1.style.backgroundColor, OPTION_BUTTON_INITIAL_BACKGROUND,
      'hiding the list unselects all the options');
    assert.equal(optionButton2.style.backgroundColor, OPTION_BUTTON_INITIAL_BACKGROUND,
      'hiding the list unselects all the options');

    optionList.selectNext();
    assert.equal(optionButton1.style.backgroundColor, OPTION_BUTTON_HOVER_BACKGROUND,
      'hiding resets the selectedOptionIndex');
    assert.equal(optionButton2.style.backgroundColor, OPTION_BUTTON_INITIAL_BACKGROUND,
      'hiding resets the selectedOptionIndex');
  });

  it('executes the selected option', function() {
    optionHandler1.reset();

    selectFirstOption(optionList);
    optionList.executeSelectedOption();
    assert.equal(optionHandler1.calls.length, 1, 'executes the handler for the selected option');

    optionList.hide();

    assert.doesNotThrow(function() {
      optionList.executeSelectedOption();
    },
      'doesn’t throw when no option is selected'
    );
  });

  it('accepts to reset its options', function() {
    var handlerA = createSpy();
    var handlerB = createSpy();
    var newOptions = {
      'labelA': handlerA,
      'labelB': handlerB
    };

    optionList.setOptions(newOptions);

    var optionLabels = _.toArray(domElement.children).map(_.property('textContent'));
    assert.deepEqual(optionLabels, Object.keys(newOptions), 'option buttons have the expected labels');

    var optionA = domElement.children[0];
    optionA.click();
    optionA.click();
    assert.deepEqual(handlerA.calls.length, 2, 'clicking on an option calls its corresponding handler');
  });

  function selectFirstOption(optionList) {
    optionList.hide();
    optionList.selectNext();
  }

  var createSpy = window.TestHelpers.createSpy;
  var assert = window.TestHelpers.assert;
  var getWidgetDOMElement = window.TestHelpers.getWidgetDOMElement;
});
