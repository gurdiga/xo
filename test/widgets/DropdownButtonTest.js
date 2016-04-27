(function() {
  'use strict';

  tape('DropdownButton', function(t) {
    var sandbox = document.createElement('div');

    var handler1 = createSpy();
    var handler2 = createSpy();
    var options = {
      'label1': handler1,
      'label2': handler2
    };

    var additionalStyle = {
      color: 'red'
    };

    var labelText = 'Add';
    var dropdownButton = new DropdownButton(labelText, options, additionalStyle);

    dropdownButton.appendTo(sandbox);

    var domElement = sandbox.firstChild;
    var toggleButton = domElement.firstChild;

    t.test('DOM structure', function(t) {
      t.equal(domElement.tagName, 'DROPDOWN-BUTTON', 'has the appropriate tag name');

      t.test('toggle button', function(t) {
        t.equal(toggleButton.textContent, labelText, 'has the appropriate label');

        var style = toggleButton.style;
        t.equal(style.fontSize, '13px', 'has a nice and readable font size');
        t.equal(style.padding, '5px 25px 5px 10px', 'has nice padding');
        t.equal(style.border, '1px solid silver', 'has a thin silver border');
        t.equal(style.borderRadius, '10px', 'has rounded borders');

        var expectedBackgroundImage = 'url("data:image/svg+xml;utf8,' +
            '<svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"8\\" height=\\"8\\">' +
              '<polygon points=\\"0,0 8,0 4,8\\" style=\\"fill:black\\" />' +
            '</svg>' +
          '")';
        t.equal(style.backgroundImage, expectedBackgroundImage, 'has an SVG triangle as the background image');
        t.equal(style.backgroundPositionY, '50%', 'the triangle is middle-aligned vertically');
        t.equal(style.backgroundPositionX, 'calc(100% - 10px)', 'the triangle is horizontally alligned at the right edge');
        t.equal(style.backgroundRepeat, 'no-repeat', 'the triangle on the background doesn’t repeat');
        t.equal(style.backgroundColor, 'transparent', 'has a transparent background');

        t.end();
      });

      t.test('option list', function(t) {
        var optionList = domElement.querySelector('div');
        var expectedOptionLabels = Object.keys(options);
        var expectedOptionCount = expectedOptionLabels.length;

        var buttons = optionList.querySelectorAll('button');
        t.equal(buttons.length, expectedOptionCount, 'has the appropriate number of options');

        var buttonLabels = _.map(buttons, _.property('textContent'));
        t.deepEqual(buttonLabels, expectedOptionLabels, 'options have the appropriate labels');

        t.end();
      });

      t.end();
    });

    t.test('style', function(t) {
      var style = domElement.style;

      t.equal(style.display, 'inline-block',
        'has display of inline-block to have the option list postioned appropriately');
      t.equal(style.color, additionalStyle.color, 'accepts additional styles');
      t.equal(style['-webkit-user-select'], 'none', 'has the text unselectable');

      t.test('toggle button', function(t) {
        var style = toggleButton.style;

        t.equal(style.outline, 'none', 'has the default outline removed because it doesn’t follow rounded corners');

        toggleButton.dispatchEvent(new Event('focus'));
        t.equal(toggleButton.style.boxShadow, 'rgb(181, 213, 255) 0px 0px 3px 2px', 'adds a box shadow on focus');

        toggleButton.dispatchEvent(new Event('blur'));
        t.equal(toggleButton.style.boxShadow, '', 'removes the box shadow when losing focus');

        t.end();
      });

      t.end();
    });

    t.test('behavior', function(t) {
      t.test('toggle button', function(t) {
        var optionList = domElement.querySelector('div');

        t.equal(optionList.style.display, 'none', 'the option list is initially hidden');
        toggleButton.click();
        t.equal(optionList.style.display, 'block', 'clicking the button displays the option list');
        toggleButton.click();
        t.equal(optionList.style.display, 'none', 'clicking the button again hides the option list');

        toggleButton.click();
        document.body.click();
        t.equal(optionList.style.display, 'none', 'clicking away hides the option list');

        toggleButton.click();
        simulateEscapeKey();
        t.equal(optionList.style.display, 'none', 'pressing Escape hides the option list');

        t.end();
      });

      t.test('option list', function(t) {
        var optionList = domElement.querySelector('div');
        var buttons = optionList.querySelectorAll('button');
        var addFieldButton = buttons[0];
        var addSectionButton = buttons[1];

        optionList.style.display = 'block';

        addFieldButton.click();
        t.equal(handler1.calls.length, 1, 'clicking on the first option calls its associated function once');
        t.equal(optionList.style.display, 'none', 'selecting an option hides the list');

        addSectionButton.click();
        t.equal(handler2.calls.length, 1, 'clicking on the second option calls its associated function once');

        t.test('can be reset', function(t) {
          var handler = createSpy();
          var newOptions = {
            'label': handler
          };

          var expectedOptionLabels = Object.keys(newOptions);

          dropdownButton.resetOptionList(newOptions);

          var buttons = optionList.querySelectorAll('button');
          var buttonLabels = _.map(buttons, _.property('textContent'));
          t.deepEqual(buttonLabels, expectedOptionLabels, 'options are updated');

          t.end();
        });

        t.end();
      });

      t.end();
    });

    t.end();
  });

  var DropdownButton = window.App.Widgets.DropdownButton;

  var simulateEscapeKey = window.TestHelpers.simulateEscapeKey;
  var createSpy = window.TestHelpers.createSpy;

}());
