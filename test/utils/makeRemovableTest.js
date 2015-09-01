(function() {
  'use strict';

  var makeRemovable = window.App.Utils.makeRemovable;
  var test = tape;

  var sandbox = document.createElement('div');
  var domElement = document.createElement('the-widget');
  sandbox.appendChild(domElement);

  test('makeRemovable', function(t) {
    var additionalButtonStyle = {
      color: 'red'
    };

    function onRemove() {
      onRemove.executed = true;
    }

    makeRemovable(domElement, onRemove, additionalButtonStyle);

    t.equal(domElement.getAttribute('removable'), '', 'adds the boolean “removable” attribute');
    t.equal(domElement.style.position, 'relative',
      'makes the DOM element relatively positioned to alllow the absolutely positioned button');

    t.test('the button', function(t) {
      var button = domElement.querySelector('button');
      t.ok(button, 'appends a button DOM element');
      t.equal(button.textContent, '×', 'has the label of “×”');
      t.equal(button.title, 'Elimină', 'has the appropriate tootlip');
      t.equal(button.getAttribute('type'), 'remove', 'has the appropriate type');

      var css = button.style;
      t.equal(css.borderWidth, '0px', 'doesn’t have border');
      t.equal(css.backgroundColor, 'transparent', 'has transparent background');
      t.equal(css.position, 'absolute', 'is absolutely positioned not to disturb the flow');
      t.equal(css.right, '0px', 'is placed at the very right');
      t.equal(css.top, '0px', 'is placed at the very top');
      t.equal(css.paddingTop, '2px', 'has 2px padding at the top');
      t.equal(css.paddingRight, '5px', 'has 5px padding at the right');
      t.equal(css.paddingBottom, '2px', 'has 2px padding at the bottom');
      t.equal(css.paddingLeft, '5px', 'has 5px padding at the left');
      t.equal(css.fontSize, '14px', 'has font size of 14px');
      t.equal(css.fontFamily, 'sans-serif', 'has font family of sans-serif');

      t.equal(css.color, additionalButtonStyle.color, 'applies the additional style');

      button.click();
      t.ok(!sandbox.querySelector('the-widget'), 'the dom element is removed from its parent DOM');
      t.ok(onRemove.executed, 'executes the onRemove callback');

      t.end();
    });

    t.test('arguments', function(t) {
      try {
        makeRemovable(42);
        t.fail('it shoud require first argument');
      } catch (error) {
        t.equal(error.message, 'makeRemovable: the first argument is required to be a DOM element');
      }

      try {
        makeRemovable(domElement);
        t.fail('it shoud require second argument to be a function');
      } catch (error) {
        t.equal(error.message, 'makeRemovable: the second argument is required to be a function to call back on remove');
      }

      t.end();
    });

    t.end();
  });

}());
