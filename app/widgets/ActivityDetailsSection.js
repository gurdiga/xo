(function() {
  'use strict';

  function ActivityDetailsSection(childWidgets) {
    var domElement = createElement();
    appendWidgets(childWidgets).to(domElement);

    this.appendTo = getAppenderOf(domElement);
  }

  function createElement() {
    var style = {
      marginLeft: '100px',
      padding: '0px',
      borderWidth: '0px'
    };

    var domElement = createDOMElement('fieldset', style);
    domElement.setAttribute('widget-name', 'ActivityDetailsSection');
    return domElement;
  }

  var getAppenderOf = window.App.Utils.getAppenderOf;
  var createDOMElement = window.App.Utils.createDOMElement;
  var appendWidgets = window.App.Utils.appendWidgets;

  window.App.Widgets.ActivityDetailsSection = ActivityDetailsSection;

}());
