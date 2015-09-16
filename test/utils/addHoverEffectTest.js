(function() {
  'use strict';

  var addHoverEffect = window.App.Utils.addHoverEffect;

  var domElement = document.createElement('div');
  var initialStyle = {
    backgroundColor: 'white'
  };

  _.extend(domElement.style, initialStyle);

  var style = {
    backgroundColor: 'silver'
  };

  tape('addHoverEffect', function(t) {
    addHoverEffect(domElement, style);

    domElement.dispatchEvent(new Event('mouseenter'));
    t.equal(domElement.style.backgroundColor, style.backgroundColor, 'applies the given style on mouse enter');

    domElement.dispatchEvent(new Event('mouseleave'));
    t.equal(domElement.style.backgroundColor, initialStyle.backgroundColor, 'applies the given style on mouse leave');

    t.end();
  });

}());
