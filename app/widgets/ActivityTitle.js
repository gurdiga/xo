(function() {
  'use strict';

  function ActivityTitle(text) {
    var domElement = createElement(text);

    this.appendTo = getAppenderOf(domElement);
  }

  function createElement(text) {
    var style = {
      display: 'block',
      fontWeight: 'bold',
      fontSize: '16px',
      verticalAlign: '-1px'
    };

    var domElement = createDOMElement('activity-title', style);

    domElement.textContent = text;

    return domElement;
  }

  var createDOMElement = window.App.Utils.createDOMElement;
  var getAppenderOf = window.App.Utils.getAppenderOf;

  window.App.Widgets.ActivityTitle = ActivityTitle;

}());
