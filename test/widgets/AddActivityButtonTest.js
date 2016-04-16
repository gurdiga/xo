(function() {
  'use strict';

  tape('AddActivityButton', function(t) {
    var sandbox = document.createElement('div');

    var activities = [];
    var addActivityButton = new AddActivityButton(activities);

    addActivityButton.appendTo(sandbox);

    var domElement = sandbox.firstChild;

    t.test('DOM structure', function(t) {
      t.equal(domElement.tagName, 'DROPDOWN-BUTTON', 'is implemented with a DropdownButton');

      var toggleButton = domElement.firstChild;
      t.equal(toggleButton.textContent, 'adaugă acţiune', 'has the appropriate label');

      t.end();
    });

    t.end();
  });

  var AddActivityButton = window.App.Widgets.AddActivityButton;

}());
