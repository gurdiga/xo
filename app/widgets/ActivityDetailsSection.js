(function() {
  'use strict';

  function ActivityDetailsSection() {
    var domElement = createElement();

    this.appendTo = getAppenderOf(domElement);

    this.setContents = function(childWidgets) {
      emptyDOMElement(domElement);
      appendWidgets(childWidgets).to(domElement);
    };
  }

  function createElement() {
    var style = {
      marginLeft: '100px',
      padding: '0px',
      borderWidth: '0px'
    };

    var attributes = {
      'widget-name': 'ActivityDetailsSection'
    };

    return createDOMElement('fieldset', style, attributes);
  }

  var getAppenderOf = window.App.Utils.getAppenderOf;
  var createDOMElement = window.App.Utils.createDOMElement;
  var appendWidgets = window.App.Utils.appendWidgets;
  var emptyDOMElement = window.App.Utils.emptyDOMElement;

  window.App.Widgets.ActivityDetailsSection = ActivityDetailsSection;

}());
