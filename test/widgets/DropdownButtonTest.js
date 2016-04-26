(function() {
  'use strict';

  var DropdownButton = window.App.Widgets.DropdownButton;

  var labelText = 'Add';
  var options = {
    'field': addFieldCallback,
    'section': addSectionCallback
  };
  var additionalStyle = {
    color: 'red'
  };

  var dropdownButton = new DropdownButton(labelText, options, additionalStyle);
  var sandbox = document.createElement('div');
  dropdownButton.appendTo(sandbox);
  document.body.appendChild(sandbox);

  tape('DropdownButton', function(t) {
    t.test('DOM structure', function(t) {
      var domElement = sandbox.firstChild;
      t.equal(domElement.tagName, 'DROPDOWN-BUTTON', 'has the appropriate tag name');

      t.test('toggle button', function(t) {
        var toggleButton = domElement.querySelector('button');
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

    t.test('styling', function(t) {
      var css;
      var domElement = sandbox.firstChild;

      css = domElement.style;
      t.equal(css.display, 'inline-block',
        'has display of inline-block to have the option list postioned appropriately');
      t.equal(css.color, additionalStyle.color, 'accepts additional styles');
      t.equal(css['-webkit-user-select'], 'none', 'has the text unselectable');

      t.test('option list', function(t) {
        var optionList = domElement.querySelector('div');
        css = optionList.style;
        t.equal(css.marginLeft, '10px', 'shifts the option list a bit inside to suggest containment');
        t.equal(css.backgroundColor, 'white', 'has white background');
        t.equal(css.position, 'absolute', 'is absolutely positioned');
        t.equal(css.boxShadow, 'rgba(0, 0, 0, 0.298039) 1px 1px 3px', 'has a nice shadow');

        var optionButton = optionList.querySelector('button');
        css = optionButton.style;
        t.equal(css.padding, '5px 10px', 'has nice padding to increase clickable area');
        t.equal(css.borderWidth, '0px', 'removes the border off option buttons');
        t.equal(css.backgroundColor, 'transparent', 'removes the background off option buttons');
        t.equal(css.width, '100%', 'makes buttons 100% wide');
        t.equal(css.textAlign, 'left', 'aligns button labels left');
        t.equal(css.fontSize, '13px', 'has a nice large font size');

        t.end();
      });

      t.end();
    });

    t.test('behavior', function(t) {
      var domElement = sandbox.firstChild;

      t.test('toggle button', function(t) {
        var toggleButton = domElement.querySelector('button');
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
        t.ok(addFieldCallback.executed, 'clicking on the first option triggers its associated function');
        t.equal(optionList.style.display, 'none', 'selecting an option hides the list');

        addSectionButton.click();
        t.ok(addSectionCallback.executed, 'clicking on the second option triggers its associated function');

        addSectionButton.dispatchEvent(new Event('mouseenter'));
        t.equal(addSectionButton.style.backgroundColor, 'rgb(195, 195, 195)',
          'options backgroun change to gray on mouseenter');

        addSectionButton.dispatchEvent(new Event('mouseleave'));
        t.equal(addSectionButton.style.backgroundColor, 'transparent',
          'options backgroun change back to normal on on mouseleave');

        t.test('can be reset', function(t) {
          var newOptions = {
            'label': function handler() {
              handler.called = true;
            }
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

    document.body.removeChild(sandbox);
  });

  function addFieldCallback() {
    addFieldCallback.executed = true;
  }

  function addSectionCallback() {
    addSectionCallback.executed = true;
  }

  var simulateEscapeKey = window.TestHelpers.simulateEscapeKey;

}());
