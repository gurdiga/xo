(function() {
  'use strict';

  var CreateWritButton = window.App.Widgets.CreateWritButton;

  var createWritButton = new CreateWritButton();
  var sandbox = document.createElement('div');
  createWritButton.appendTo(sandbox);

  tape('CreateWritButton', function(t) {
    var domElement = sandbox.firstChild;

    t.equal(domElement.getAttribute('widget'), 'CreateWritButton', 'has the appropriate “widget” attribute');
    t.equal(domElement.textContent, 'Încheiere', 'has the appropriate label');

    t.end();
  });

}());
