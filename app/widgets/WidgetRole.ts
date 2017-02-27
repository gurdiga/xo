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

    this.hide = function() {
      domElement.style.display = 'none';
    };

    this.show = function() {
      domElement.style.display = '';
    };

    this.isShown = function() {
      return domElement.style.display !== 'none';
    };

    this.toggle = function() {
      var style = domElement.style;
      style.display = style.display === 'none' ? '' : 'none';
    };

    this.remove = getRemoverOf(domElement);
  }

  var getAppenderOf = window.App.Utils.getAppenderOf;
  var getStylerOf = window.App.Utils.getStylerOf;
  var getRemoverOf = window.App.Utils.getRemoverOf;

  window.App.Widgets.WidgetRole = WidgetRole;

}());
