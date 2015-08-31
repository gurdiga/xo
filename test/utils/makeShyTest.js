(function() {
  'use strict';

  var makeShy = window.App.Utils.makeShy;
  var domElement = document.createElement('div');
  domElement.style.transition = 'padding 0.8s linear';

  makeShy(domElement);

  tape('makeShy', function(t) {
    t.equal(domElement.getAttribute('shy'), '', 'adds the boolean “shy” attribute for inspectability');
    t.equal(domElement.style.opacity, '0.3', 'sets the element’s opacity to 0.3');

    t.test('adds a transition for opacity while preserving other transitions', function(t) {
      var css = domElement.style;

      t.equal(css.transitionProperty, 'padding, opacity', 'transition property');
      t.equal(css.transitionDuration, '0.8s, 0.5s', 'transition duration');
      t.equal(css.transitionTimingFunction, 'linear, ease', 'transition timing function');
      t.equal(css.transitionDelay, '0s, 0.1s', 'transition delay');

      t.end();
    });

    domElement.dispatchEvent(new Event('mouseenter'));
    t.equal(domElement.style.opacity, '1', 'sets the element’s opacity to 1 on hover');

    domElement.dispatchEvent(new Event('mouseleave'));
    t.equal(domElement.style.opacity, '0.3', 'sets the element’s opacity back to initial on mouse leave');

    t.end();
  });

}());
