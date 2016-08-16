(function() {
  'use strict';

  function Activity2(labelText) {
    var container = createContainer(labelText);
    var dateField = createDateField();

    container.appendWidgets([dateField]);

    this.appendTo = delegateTo(container, 'appendTo');
    this.appendWidgets = delegateTo(container, 'appendWidgets');
  }

  Activity2.createWithData = function(data) {
    return new this(data['label-text']);
  };

  function createContainer(labelText) {
    var labelStyle = {
      'font-size': '16px',
      'font-weight': 'bold'
    };
    var container = new LabeledContainer(labelText);

    container.setLabelStyle(labelStyle);

    return container;
  }

  function createDateField() {
    var dateField = new DateField();
    var style = {
      'width': '6.5em'
    };

    dateField.setStyle(style);

    return dateField;
  }

  var LabeledContainer = window.App.Widgets.LabeledContainer;
  var DateField = window.App.Widgets.DateField;

  var delegateTo = window.App.Utils.delegateTo;

  window.App.Widgets.Activity2 = Activity2;

}());
