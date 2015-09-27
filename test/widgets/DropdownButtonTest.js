(function() {
  'use strict';

  var DropdownButton = window.App.Widgets.DropdownButton;

  var labelText = 'Add ▾';
  var options = {
    'field': addFieldCallback,
    'section': addSectionCallback
  };

  var dropdownButton = new DropdownButton(labelText, options);
  var sandbox = document.createElement('div');
  dropdownButton.appendTo(sandbox);
  document.body.appendChild(sandbox);

  tape('DropdownButton', function(t) {
    t.test('DOM structure', function(t) {
      var domElement = sandbox.firstChild;
      t.ok(domElement, 'exists');
      t.equal(domElement.tagName, 'DROPDOWN-BUTTON', 'has the appropriate tag name');

      t.test('toggle button', function(t) {
        var toggleButton = domElement.querySelector('button');

        t.ok(toggleButton, 'exists');
        t.equal(toggleButton.textContent, labelText, 'has the appropriate label');

        t.end();
      });

      t.test('option list', function(t) {
        var optionList = domElement.querySelector('ul');

        t.ok(optionList, 'exists');

        var expectedOptionLabels = Object.keys(options);
        var expectedOptionCount = expectedOptionLabels.length;
        var actualOptions = optionList.querySelectorAll('li');
        t.equal(actualOptions.length, expectedOptionCount, 'has the appropriate number of options');

        var optionButtons = optionList.querySelectorAll('li button');
        var buttonLabels = _.map(optionButtons, _.property('textContent'));
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

      t.test('option list', function(t) {
        var optionList = domElement.querySelector('ul');
        css = optionList.style;
        t.equal(css.paddingLeft, '0px', 'has the padding left removed');
        t.equal(css.marginTop, '0px', 'has the top margin is removed');
        t.equal(css.marginBottom, '0px', 'has the bottom margin is removed');
        t.equal(css.backgroundColor, 'white', 'has white background');
        t.equal(css.position, 'absolute', 'is absolutely positioned');
        t.equal(css.boxShadow, 'rgba(0, 0, 0, 0.298039) 1px 1px 3px', 'has a nice shadow');
        t.equal(css.listStyleType, 'none', 'has bullets disabled');

        var optionButton = optionList.querySelector('li button');
        css = optionButton.style;
        t.equal(css.borderWidth, '0px', 'removes the border off option buttons');
        t.equal(css.backgroundColor, 'transparent', 'removes the background off option buttons');
        t.equal(css.width, '100%', 'makes buttons 100% wide');
        t.equal(css.textAlign, 'left', 'aligns button labels left');

        t.end();
      });

      t.end();
    });

    t.test('behavior', function(t) {
      var domElement = sandbox.firstChild;

      t.test('toggle button', function(t) {
        var toggleButton = domElement.querySelector('button');
        var optionList = domElement.querySelector('ul');

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
        var optionList = domElement.querySelector('ul');
        var optionButtons = optionList.querySelectorAll('li button');
        var addFieldButton = optionButtons[0];
        var addSectionButton = optionButtons[1];

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

}());
