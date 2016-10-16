(function() {
  'use strict';

  function ActivityDetailsSection() {
    var domElement = createElement();
    WidgetRole.apply(this, [domElement]);

    this.setChildWidgets = function(childWidgets) {
      resetChildren(domElement, childWidgets);
    };
  }

  function createElement() {
    var style = {};
    var attributes = {
      role: 'region'
    };

    return createDOMElement('ACTIVITY-DETAILS-SECTION', style, attributes);
  }

  var WidgetRole = window.App.Widgets.WidgetRole;

  var createDOMElement = window.App.Utils.createDOMElement;
  var resetChildren = window.App.Utils.resetChildren;

  window.App.Widgets.ActivityDetailsSection = ActivityDetailsSection;

}());
