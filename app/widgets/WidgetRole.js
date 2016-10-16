(function() {
  'use strict';

  function WidgetRole(domElement) {
    this.appendTo = getAppenderOf(domElement);
    this.remove = getRemoverOf(domElement);
  }

  var getAppenderOf = window.App.Utils.getAppenderOf;
  var getRemoverOf = window.App.Utils.getRemoverOf;

  window.App.Widgets.WidgetRole = WidgetRole;

}());
