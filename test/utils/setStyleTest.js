(function() {
  'use strict';

  tape('setStyle', function(t) {
    var domElement = createDOMElement('div');
    var style = {
      'color': 'red'
    };

    setStyle(domElement, style);

    t.equal(domElement.style.color, style.color, 'sets the given style on the DOM element');

    t.end();
  });

  var setStyle = window.App.Utils.setStyle;
  var createDOMElement = window.App.Utils.createDOMElement;

}());
