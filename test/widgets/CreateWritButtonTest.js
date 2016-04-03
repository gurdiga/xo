(function() {
  'use strict';

  var CreateWritButton = window.App.Widgets.CreateWritButton;

  var createWritButton = new CreateWritButton();
  var sandbox = document.createElement('div');
  createWritButton.appendTo(sandbox);

  tape('CreateWritButton', function(t) {
    var domElement = sandbox.firstChild;

    t.equal(domElement.getAttribute('widget-name'), 'CreateWritButton',
      'has the appropriate “widget-name” attribute');
    t.equal(domElement.textContent, 'încheiere', 'has the appropriate label');

    t.test('styling', function(t) {
      var css = domElement.style;

      t.equal(css.fontFamily, 'sans-serif', 'has sans-serif font family');
      t.equal(css.fontSize, '14px', 'has the appropriate font size');
      t.equal(css.fontWeight, 'bold', 'is bold');
      t.equal(css.padding, '5px 14px', 'has a nice padding');
      t.equal(css.border, '1px solid silver', 'has a nice border');
      t.equal(css.borderRadius, '5px', 'has 5px-rounded corners');
      t.equal(css.color, 'rgb(119, 119, 119)', 'has the appropriate text color');
      t.equal(css.background, 'transparent', 'has transparent background');
      t.equal(css.marginTop, '5px', 'leaves some space at the top');

      t.end();
    });

    t.end();
  });

}());
