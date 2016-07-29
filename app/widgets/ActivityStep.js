(function() {
  'use strict';

  function ActivityStep(stepId, description) {
    var domElement = createElement(stepId);

    var checkbox = new LabeledCheckbox(description);
    checkbox.appendTo(domElement);

    this.appendTo = getAppenderOf(domElement);

    this.getValue = function() {
      return {
        'step-id': stepId,
        'is-completed': checkbox.getValue()
      };
    };

    this.setValue = function(value) {
      checkbox.setValue(value['is-completed']);
    };
  }

  function createElement(stepId) {
    var style = {};
    var attributes = {
      'step-id': stepId
    };

    return createDOMElement('activity-step', style, attributes);
  }

  var LabeledCheckbox = window.App.Widgets.LabeledCheckbox;

  var createDOMElement = window.App.Utils.createDOMElement;
  var getAppenderOf = window.App.Utils.getAppenderOf;

  window.App.Widgets.ActivityStep = ActivityStep;

}());
