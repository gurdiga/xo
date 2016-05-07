(function() {
  'use strict';

  tape('OptionList', function(t) {
    var sandbox = document.createElement('div');

    var optionHandler1 = createSpy();
    var optionHandler2 = createSpy();
    var options = {
      'label1': optionHandler1,
      'label2': optionHandler2
    };

    var optionList = new OptionList(options);

    optionList.appendTo(sandbox);

    var domElement = sandbox.firstChild;
    var optionButton1 = domElement.children[0];
    var optionButton2 = domElement.children[1];

    var OPTION_BUTTON_HOVER_BACKGROUND = OptionList.HOVER_OPTION_BUTTON_STYLE.backgroundColor;
    var OPTION_BUTTON_INITIAL_BACKGROUND = OptionList.INITIAL_OPTION_BUTTON_STYLE.backgroundColor;

    t.test('DOM structure', function(t) {
      t.equal(domElement.getAttribute('widget-name'), 'OptionList', 'has the appropriate widget name');

      var optionLabels = _.toArray(domElement.children).map(_.property('textContent'));
      t.deepEqual(optionLabels, Object.keys(options), 'option buttons have the expected labels');

      t.end();
    });

    t.test('style', function(t) {
      var style = domElement.style;

      t.equal(style.marginLeft, '10px', 'shifts the option list a bit inside to suggest containment');
      t.equal(style.backgroundColor, 'white', 'has white background');
      t.equal(style.position, 'absolute', 'is absolutely positioned');
      t.equal(style.boxShadow, 'rgba(0, 0, 0, 0.298039) 1px 1px 3px', 'has a nice shadow');

      t.test('option buttons', function(t) {
        var style = optionButton1.style;

        t.equal(style.padding, '5px 10px', 'has nice padding to increase clickable area');
        t.equal(style.borderWidth, '0px', 'removes the border off option buttons');
        t.equal(style.backgroundColor, 'transparent', 'inherits the background from the container');
        t.equal(style.width, '100%', 'makes buttons 100% wide');
        t.equal(style.textAlign, 'left', 'aligns button labels left');
        t.equal(style.fontSize, '13px', 'has a nice large font size');

        optionButton1.dispatchEvent(new Event('mouseenter'));
        t.equal(optionButton1.style.backgroundColor, OPTION_BUTTON_HOVER_BACKGROUND,
          'options backgroun change to gray on mouseenter');

        optionButton1.dispatchEvent(new Event('mouseleave'));
        t.equal(optionButton1.style.backgroundColor, OPTION_BUTTON_INITIAL_BACKGROUND,
          'options backgroun change back to normal on on mouseleave');

        t.end();
      });

      t.end();
    });

    t.test('behavior', function(t) {
      optionButton1.click();
      optionButton1.click();
      t.deepEqual(optionHandler1.calls.length, 2, 'clicking on an option calls its corresponding handler');

      optionButton2.click();
      t.deepEqual(optionHandler2.calls.length, 1, 'clicking on an option calls its corresponding handler');

      t.end();
    });

    t.test('selecting previous and next', function(t) {
      optionList.selectNext();
      t.equal(optionButton1.style.backgroundColor, OPTION_BUTTON_HOVER_BACKGROUND,
        'selectNext selects the first option initially');

      optionList.selectNext();
      t.equal(optionButton1.style.backgroundColor, OPTION_BUTTON_INITIAL_BACKGROUND,
        'selectNext selects the option next to the currently selected one');
      t.equal(optionButton2.style.backgroundColor, OPTION_BUTTON_HOVER_BACKGROUND,
        'selectNext selects the option next to the currently selected one');

      optionList.selectNext();
      t.equal(optionButton1.style.backgroundColor, OPTION_BUTTON_HOVER_BACKGROUND,
        'when the last option is selected selectNext goes around to the first');
      t.equal(optionButton2.style.backgroundColor, OPTION_BUTTON_INITIAL_BACKGROUND,
        'when the last option is selected selectNext unselects it');

      optionList.selectPrevious();
      t.equal(optionButton1.style.backgroundColor, OPTION_BUTTON_INITIAL_BACKGROUND,
        'when the first option is selected selectPrevious unselects it');
      t.equal(optionButton2.style.backgroundColor, OPTION_BUTTON_HOVER_BACKGROUND,
        'when the first option is selected selectPrevious goess around to the last');

      optionList.selectPrevious();
      t.equal(optionButton1.style.backgroundColor, OPTION_BUTTON_HOVER_BACKGROUND,
        'selectPrevious selects the option that is above the currently selected one');
      t.equal(optionButton2.style.backgroundColor, OPTION_BUTTON_INITIAL_BACKGROUND,
        'selectPrevious unselects the option that was selected');

      optionList.hide();
      t.equal(optionButton1.style.backgroundColor, OPTION_BUTTON_INITIAL_BACKGROUND,
        'hiding the list unselects all the options');
      t.equal(optionButton2.style.backgroundColor, OPTION_BUTTON_INITIAL_BACKGROUND,
        'hiding the list unselects all the options');

      optionList.selectNext();
      t.equal(optionButton1.style.backgroundColor, OPTION_BUTTON_HOVER_BACKGROUND,
        'hiding resets the selectedOptionIndex');
      t.equal(optionButton2.style.backgroundColor, OPTION_BUTTON_INITIAL_BACKGROUND,
        'hiding resets the selectedOptionIndex');

      t.end();
    });

    t.test('resetting options', function(t) {
      var handlerA = createSpy();
      var handlerB = createSpy();
      var newOptions = {
        'labelA': handlerA,
        'labelB': handlerB
      };

      optionList.setOptions(newOptions);

      var optionLabels = _.toArray(domElement.children).map(_.property('textContent'));
      t.deepEqual(optionLabels, Object.keys(newOptions), 'option buttons have the expected labels');

      var optionA = domElement.children[0];
      optionA.click();
      optionA.click();
      t.deepEqual(handlerA.calls.length, 2, 'clicking on an option calls its corresponding handler');

      t.end();
    });

    t.end();
  });

  var OptionList = window.App.Widgets.OptionList;

  var createSpy = window.TestHelpers.createSpy;

}());
