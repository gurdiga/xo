describe('DropdownButton', function() {
  'use strict';

  var DropdownButton = window.App.Widgets.DropdownButton;

  var optionHandler1, optionHandler2, options, additionalStyle,
    labelText, dropdownButton, domElement, toggleButton, optionList;

  before(function() {
    optionHandler1 = createSpy();
    optionHandler2 = createSpy();
    options = {
      'label1': optionHandler1,
      'label2': optionHandler2
    };

    additionalStyle = {
      color: 'red'
    };

    labelText = 'Add';
    dropdownButton = new DropdownButton(labelText, options, additionalStyle);

    domElement = getWidgetDOMElement(dropdownButton);
    toggleButton = domElement.firstChild;
    optionList = domElement.querySelector('div');
  });

  it('has the appropriate Dom structure', function() {
    assert.equal(domElement.tagName, 'DROPDOWN-BUTTON', 'has the appropriate tag name');
  });

  it('has the appropriate style', function() {
    var style = domElement.style;

    assert.equal(style.display, 'inline-block',
      'has display of inline-block to have the option list postioned appropriately');
    assert.equal(style.color, additionalStyle.color, 'accepts additional styles');
    assert.equal(style['-webkit-user-select'], 'none', 'has the text unselectable');
  });

  describe('toggle button', function() {
    it('ahs the appropriate label text', function() {
      assert.equal(toggleButton.textContent, labelText, 'has the appropriate label');
    });

    it('has the appropriate style', function() {
      var style = toggleButton.style;
      assert.equal(style.fontSize, '13px', 'has a nice and readable font size');
      assert.equal(style.padding, '5px 25px 5px 10px', 'has nice padding');
      assert.equal(style.border, '1px solid silver', 'has a thin silver border');
      assert.equal(style.borderRadius, '10px', 'has rounded borders');

      var expectedBackgroundImage = 'url("data:image/svg+xml;utf8,' +
          '<svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"8\\" height=\\"8\\">' +
            '<polygon points=\\"0,0 8,0 4,8\\" style=\\"fill:black\\" />' +
          '</svg>' +
        '")';
      assert.equal(style.backgroundImage, expectedBackgroundImage, 'has an SVG triangle as the background image');
      assert.equal(style.backgroundPositionY, '50%', 'the triangle is middle-aligned vertically');
      assert.equal(style.backgroundPositionX, 'calc(100% - 10px)', 'the triangle is horizontally alligned at the right edge');
      assert.equal(style.backgroundRepeat, 'no-repeat', 'the triangle on the background doesn’t repeat');
      assert.equal(style.backgroundColor, 'transparent', 'has a transparent background');
      assert.equal(style.outline, 'none', 'has the default outline removed because it doesn’t follow rounded corners');

      toggleButton.dispatchEvent(new Event('focus'));
      assert.equal(toggleButton.style.boxShadow, 'rgb(181, 213, 255) 0px 0px 3px 2px', 'adds a box shadow on focus');

      toggleButton.dispatchEvent(new Event('blur'));
      assert.equal(toggleButton.style.boxShadow, '', 'removes the box shadow when losing focus');
    });

    it('works', function() {
      var optionList = domElement.querySelector('div');

      assert.equal(optionList.style.display, 'none', 'the option list is initially hidden');
      toggleButton.click();
      assert.equal(optionList.style.display, '', 'clicking the button displays the option list');
      toggleButton.click();
      assert.equal(optionList.style.display, 'none', 'clicking the button again hides the option list');

      toggleButton.click();
      document.body.click();
      assert.equal(optionList.style.display, 'none', 'clicking away hides the option list');

      toggleButton.click();
      simulateEscapeKey();
      assert.equal(optionList.style.display, 'none', 'pressing Escape hides the option list');
    });
  });

  describe('option list', function() {
    it('has the appropriate options', function() {
      var optionList = domElement.querySelector('div');
      var expectedOptionLabels = Object.keys(options);
      var expectedOptionCount = expectedOptionLabels.length;

      var optionButtons = optionList.querySelectorAll('button');
      assert.equal(optionButtons.length, expectedOptionCount, 'has the appropriate number of options');

      var optionButtonLabels = _.map(optionButtons, _.property('textContent'));
      assert.deepEqual(optionButtonLabels, expectedOptionLabels, 'options have the appropriate labels');
    });

    it('works', function() {
      var optionButtons = optionList.querySelectorAll('button');

      optionList.style.display = 'block';

      optionButtons[0].click();
      assert.equal(optionHandler1.calls.length, 1, 'clicking on the first option calls its associated function once');
      assert.equal(optionList.style.display, 'none', 'selecting an option hides the list');

      optionButtons[1].click();
      assert.equal(optionHandler2.calls.length, 1, 'clicking on the second option calls its associated function once');
    });

    describe('keyboard navigation', function() {
      var hideOptionList, optionButtons, firstOptionButton, lastOptionButton;

      before(function() {
        hideOptionList = simulateEscapeKey;

        optionButtons = optionList.querySelectorAll('button');
        firstOptionButton = optionButtons[0];
        lastOptionButton = optionButtons[optionButtons.length - 1];
      });

      it('reacts appropriately to the down arrow', function() {
        hideOptionList();

        simulateKeyDown(toggleButton, 'ArrowDown');
        assert.equal(optionList.style.display, '', 'shows the list');
        assert.equal(firstOptionButton.style.backgroundColor, OptionList.HOVER_OPTION_BUTTON_STYLE['background-color'],
          'renders the first option as selected');
      });

      it('reacts appropriately to the up arrow', function() {
        hideOptionList();

        simulateKeyDown(toggleButton, 'ArrowUp');
        assert.equal(optionList.style.display, '', 'shows the list');
        assert.equal(lastOptionButton.style.backgroundColor, OptionList.HOVER_OPTION_BUTTON_STYLE['background-color'],
          'renders the last option as selected');
      });

      it('reacts appropriately to the Esc key', function() {
        hideOptionList();

        simulateKeyDown(toggleButton, 'ArrowDown');
        simulateEscapeKey();
        assert.equal(optionList.style.display, 'none', 'hides the list');
        assert.equal(firstOptionButton.style.backgroundColor, OptionList.INITIAL_OPTION_BUTTON_STYLE['background-color'],
          'unselects the selected option');
      });

      it('reacts appropriately to the Enter key', function() {
        hideOptionList();

        simulateKeyDown(toggleButton, 'ArrowDown');
        simulateKeyDown(toggleButton, 'Enter');
        assert.equal(optionHandler1.calls.length, 1, 'executes the selected option’s handler');
      });
    });

    it('can be reset', function() {
      var optionHandler = createSpy();
      var newOptions = {
        'label': optionHandler
      };

      var expectedOptionLabels = Object.keys(newOptions);

      dropdownButton.resetOptionList(newOptions);

      var optionButtons = optionList.querySelectorAll('button');
      var optionButtonLabels = _.map(optionButtons, _.property('textContent'));
      assert.deepEqual(optionButtonLabels, expectedOptionLabels, 'options are updated');
    });
  });

  var OptionList = window.App.Widgets.OptionList;

  var simulateEscapeKey = window.TestHelpers.simulateEscapeKey;
  var createSpy = window.TestHelpers.createSpy;
  var simulateKeyDown = window.TestHelpers.simulateKeyDown;
  var assert = window.TestHelpers.assert;
  var getWidgetDOMElement = window.TestHelpers.getWidgetDOMElement;
});
