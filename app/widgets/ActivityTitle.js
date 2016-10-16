(function() {
  'use strict';

  function ActivityTitle(text) {
    var domElement = createElement(text);
    WidgetRole.apply(this, [domElement]);
  }

  function createElement(text) {
    var style = {
      display: 'block',
      fontWeight: 'bold',
      fontSize: '16px',
      verticalAlign: '-1px'
    };

    var attributes = {
      role: 'heading'
    };

    var domElement = createDOMElement('activity-title', style, attributes);

    domElement.textContent = text;

    return domElement;
  }

  var WidgetRole = window.App.Widgets.WidgetRole;

  var createDOMElement = window.App.Utils.createDOMElement;

  window.App.Widgets.ActivityTitle = ActivityTitle;

}());
