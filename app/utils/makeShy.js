(function() {
  'use strict';

  function makeShy(domElement) {
    domElement.setAttribute('shy', '');
    domElement.style.opacity = '0.3';

    setTransition(domElement);

    domElement.addEventListener('mouseenter', function() {
      domElement.style.opacity = '1';
    });

    domElement.addEventListener('mouseleave', function() {
      domElement.style.opacity = '0.3';
    });
  }

  function setTransition(domElement) {
    appendStyleProperty(domElement, 'transitionProperty', 'opacity');
    appendStyleProperty(domElement, 'transitionDuration', '0.5s');
    appendStyleProperty(domElement, 'transitionTimingFunction', 'ease');
    appendStyleProperty(domElement, 'transitionDelay', '0.1s');
  }

  function appendStyleProperty(domElement, propertyName, propertyValue) {
    if (domElement.style[propertyName]) domElement.style[propertyName] = normalizedInitialValue(domElement, propertyName) + ', ' + propertyValue;
    else domElement.style[propertyName] = propertyValue;
  }

  function normalizedInitialValue(domElement, propertyName) {
    var initialValue = domElement.style[propertyName];

    if (propertyName === 'transitionDelay' && initialValue === 'initial') {
      /*
       * Webkit ignores transitionDelay if it contains “initial” anywhere in the list.
       */
      initialValue = '0s';
    }

    return initialValue;
  }

  window.App.Utils.makeShy = makeShy;

}());
