describe('makeShy', function() {
  'use strict';

  var makeShy = window.App.Utils.makeShy;

  var domElement;

  before(function() {
    domElement = document.createElement('div');
    domElement.style.transition = 'padding 0.8s linear';

    makeShy(domElement);
  });

  it('chainges the given DOM element appropriatelly', function() {
    assert.equal(domElement.getAttribute('shy'), '', 'adds the boolean “shy” attribute for inspectability');
    assert.equal(domElement.style.opacity, '0.3', 'sets the element’s opacity to 0.3');
  });

  it('adds a transition for opacity while preserving other transitions', function() {
    var css = domElement.style;

    assert.equal(css.transitionProperty, 'padding, opacity', 'transition property');
    assert.equal(css.transitionDuration, '0.8s, 0.5s', 'transition duration');
    assert.equal(css.transitionTimingFunction, 'linear, ease', 'transition timing function');
    assert.equal(css.transitionDelay, '0s, 0.1s', 'transition delay');
  });

  it('makes the element react to DOM event', function() {
    domElement.dispatchEvent(new Event('mouseenter'));
    assert.equal(domElement.style.opacity, '1', 'sets the element’s opacity to 1 on hover');

    domElement.dispatchEvent(new Event('mouseleave'));
    assert.equal(domElement.style.opacity, '0.3', 'sets the element’s opacity back to initial on mouse leave');
  });

  var assert = window.TestHelpers.assert;

});
