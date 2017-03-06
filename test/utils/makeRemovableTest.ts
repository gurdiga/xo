import {assert} from "test/helper";

describe('makeRemovable', function() {
  'use strict';

  var makeRemovable = window.App.Utils.makeRemovable;

  var sandbox, domElement, additionalButtonStyle, onRemove;

  before(function() {
    sandbox = document.createElement('div');
    domElement = document.createElement('the-widget');

    domElement.style.color = 'green';
    sandbox.appendChild(domElement);

    onRemove = window.TestHelpers.createSpy();

    additionalButtonStyle = {
      color: 'red',
      top: '50px'
    };

    makeRemovable(domElement, onRemove, additionalButtonStyle);
  });

  it('has the appropriate DOM structure', function() {
    assert.equal(domElement.getAttribute('removable'), '', 'adds the boolean “removable” attribute');
    assert.equal(domElement.style.position, 'relative',
      'makes the DOM element relatively positioned to alllow the absolutely positioned button');
  });

  describe('the button', function() {
    var button, css;

    before(function() {
      button = domElement.querySelector('button');
      css = button.style;
    });

    it('has the appropriate DOM structure', function() {
      assert.equal(button.textContent, '×', 'has the label of “×”');
      assert.equal(button.title, 'Elimină', 'has the appropriate tootlip');
      assert.equal(button.getAttribute('type'), 'remove', 'has the appropriate type');
    });

    it('has the appropriate style', function() {
      assert.equal(css.borderWidth, '0px', 'doesn’t have border');
      assert.equal(css.backgroundColor, 'transparent', 'has transparent background');
      assert.equal(css.position, 'absolute', 'is absolutely positioned not to disturb the flow');
      assert.equal(css.left, '-16px', 'is placed out at the left, a bit more than an em');
      assert.equal(css.paddingTop, '2px', 'has 2px padding at the top');
      assert.equal(css.paddingRight, '5px', 'has 5px padding at the right');
      assert.equal(css.paddingBottom, '2px', 'has 2px padding at the bottom');
      assert.equal(css.paddingLeft, '5px', 'has 5px padding at the left');
      assert.equal(css.fontSize, '14px', 'has font size of 14px');
      assert.equal(css.fontFamily, 'sans-serif', 'has font family of sans-serif');
    });

    it('accepts additional style', function() {
      assert.equal(css.color, additionalButtonStyle.color, 'applies the additional style');
      assert.equal(css.top, additionalButtonStyle.top, 'additional styles override the defaults');
    });

    it('is shy', function() {
      assert.equal(css.opacity, '0.3', 'is shy');

      button.dispatchEvent(new Event('mouseenter'));
      assert.equal(css.opacity, '1', 'fades in on mouseenter');

      button.dispatchEvent(new Event('mouseleave'));
      assert.equal(css.opacity, '0.3', 'fades out on mouseleave');
    });

    it('works', function() {
      button.click();

      assert(!sandbox.querySelector('the-widget'), 'the dom element is removed from its parent DOM');
      assert.equal(onRemove.calls.length, 1, 'executes the onRemove callback');
    });
  });

  it('validates input', function() {
    assert.throws(function() {
      makeRemovable(42);
    },
      'makeRemovable: the first argument is required to be a DOM element'
    );

    assert.throws(function() {
      makeRemovable(domElement);
    },
      'makeRemovable: the second argument is required to be a function to call back on remove'
    );
  });
});
