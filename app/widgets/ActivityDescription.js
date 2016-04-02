(function() {
  'use strict';

  function ActivityDescription(text) {
    var domElement = createElement(text);

    this.appendTo = getAppenderOf(domElement);
  }

  function createElement(text) {
    var style = {
      display: 'inline',
      fontWeight: 'bold',
      fontSize: '16px',
      marginLeft: '0.5em',
      verticalAlign: '-1px'
    };

    var domElement = createDOMElement('activity-description', style);

    domElement.textContent = text;

    return domElement;
  }

  var createDOMElement = window.App.Utils.createDOMElement;
  var getAppenderOf = window.App.Utils.getAppenderOf;

  window.App.Widgets.ActivityDescription = ActivityDescription;

}());
