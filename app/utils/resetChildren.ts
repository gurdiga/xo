(function() {
  'use strict';

  function resetChildren(domElement, children) {
    emptyDOMElement(domElement);
    appendWidgets(children).to(domElement);
  }

  var emptyDOMElement = window.App.Utils.emptyDOMElement;
  var appendWidgets = window.App.Utils.appendWidgets;

  window.App.Utils.resetChildren = resetChildren;

}());
