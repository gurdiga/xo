(function() {
  'use strict';

  var DropdownButton = window.App.Widgets.DropdownButton;

  var options = {
    'field': addFieldCallback,
    'section': addSectionCallback
  };

  var dropdownButton = new DropdownButton('Add', options);
  var sandbox = document.createElement('div');
  dropdownButton.appendTo(sandbox);

  tape('DropdownButton', function(t) {
    t.test('DOM structure', function(t) {
      var domElement = sandbox.querySelector('dropdown-button');
      t.ok(domElement, 'exists');

      t.test('toggle button', function(t) {
        var toggleButton = domElement.querySelector('button');

        t.ok(toggleButton, 'exists');
        t.equal(toggleButton.textContent, 'Add', 'has the appropriate label');

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
      // TODO

      t.end();
    });

    t.test('behavior', function(t) {
      var domElement = sandbox.querySelector('dropdown-button');

      t.test('toggle button', function(t) {
        var toggleButton = domElement.querySelector('button');
        var optionList = domElement.querySelector('ul');

        t.equal(optionList.style.display, 'none', 'the option list is initially hidden');
        toggleButton.click();
        t.equal(optionList.style.display, 'block', 'clicking the button displays the option list');

        t.end();
      });

      t.test('option list', function(t) {
        var optionList = domElement.querySelector('ul');
        var optionButtons = optionList.querySelectorAll('li button');

        optionButtons[0].click();
        t.ok(addFieldCallback.executed, 'clicking on the first option triggers its associated function');

        optionButtons[1].click();
        t.ok(addSectionCallback.executed, 'clicking on the second option triggers its associated function');

        t.end();
      });

      // TODO

      t.end();
    });

    t.end();
  });

  function addFieldCallback() {
    addFieldCallback.executed = true;
  }

  function addSectionCallback() {
    addSectionCallback.executed = true;
  }

}());
