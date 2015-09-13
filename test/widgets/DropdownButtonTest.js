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

        var optionLabels = _.map(actualOptions, _.property('textContent'));
        t.deepEqual(optionLabels, expectedOptionLabels, 'options have the appropriate labels');

        // TODO
        // test that each list item has a button inside it; with the expected textContent?
        //

        t.end();
      });

      t.end();
    });

    t.test('styling', function(t) {
      // TODO

      t.end();
    });

    t.test('behavior', function(t) {
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
