(function() {
  'use strict';

  function ActivityDetailsSection() {
    var domElement = createElement();

    this.appendTo = getAppenderOf(domElement);
  }

  function createElement() {
    var style = {
      marginLeft: '90px',
      borderWidth: '0px'
    };

    return createDOMElement('fieldset', style);
  }

  var getAppenderOf = window.App.Utils.getAppenderOf;
  var createDOMElement = window.App.Utils.createDOMElement;

  window.App.Widgets.ActivityDetailsSection = ActivityDetailsSection;

}());
