(function() {
  'use strict';

  function ActivityStep(stepId, description) {
    var domElement = createDOMElement('activity-step');
    domElement.setAttribute('step-id', stepId);

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

  var LabeledCheckbox = window.App.Widgets.LabeledCheckbox;

  var createDOMElement = window.App.Utils.createDOMElement;
  var getAppenderOf = window.App.Utils.getAppenderOf;

  window.App.Widgets.ActivityStep = ActivityStep;

}());
