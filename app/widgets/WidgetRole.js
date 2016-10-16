(function() {
  'use strict';

  function WidgetRole(domElement) {
    this.appendTo = getAppenderOf(domElement);

    this.insertAfter = function(siblingDOMElement) {
      siblingDOMElement.parentNode.insertBefore(domElement, siblingDOMElement.nextSibling);
    };

    this.setInternalName = function(internalName) {
      domElement.setAttribute('internal-name', internalName);
    };

    this.setStyle = getStylerOf(domElement);
    this.remove = getRemoverOf(domElement);
  }

  var getAppenderOf = window.App.Utils.getAppenderOf;
  var getStylerOf = window.App.Utils.getStylerOf;
  var getRemoverOf = window.App.Utils.getRemoverOf;

  window.App.Widgets.WidgetRole = WidgetRole;

}());
