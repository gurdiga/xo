(function() {
  'use strict';

  function ActivityStep(stepId, description) {
    var domElement = createElement(stepId);
    WidgetRole.apply(this, [domElement]);

    var container = createContainer(description);
    var checkbox = new LabeledCheckbox('completat');

    container.setChildWidgets([checkbox]);
    container.appendTo(domElement);

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

  function createContainer(label) {
    return new LabeledContainer(label);
  }

  var WidgetRole = window.App.Widgets.WidgetRole;
  var LabeledContainer = window.App.Widgets.LabeledContainer;
  var LabeledCheckbox = window.App.Widgets.LabeledCheckbox;

  var createDOMElement = window.App.Utils.createDOMElement;

  window.App.Widgets.ActivityStep = ActivityStep;

}());
