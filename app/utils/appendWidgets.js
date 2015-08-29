(function() {
  'use strict';

  function appendWidgets(childWidgets) {
    return {
      to: function(domElement) {
        if (!childWidgets) return;

        childWidgets.forEach(appendWidgetTo(domElement));
      }
    };
  }

  function appendWidgetTo(domElement) {
    return function(childWidget) {
      if (childWidget instanceof HTMLElement) domElement.appendChild(childWidget);
      else childWidget.appendTo(domElement);
    };
  }

  window.App.Utils.appendWidgets = appendWidgets;

}());
