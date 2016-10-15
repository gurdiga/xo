(function() {
  'use strict';

  function Widget(domElement) {
    this.appendTo = getAppenderOf(domElement);
  }

  var getAppenderOf = window.App.Utils.getAppenderOf;

  window.App.Widgets.Widget = Widget;

}());
