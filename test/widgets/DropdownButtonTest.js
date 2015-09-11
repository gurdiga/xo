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
