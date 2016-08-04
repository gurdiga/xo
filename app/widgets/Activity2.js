(function() {
  'use strict';

  function Activity2(labelText) {
    var container = createContainer(labelText);

    this.appendTo = delegateTo(container, 'appendTo');
  }

  function createContainer(labelText) {
    return new LabeledContainer(labelText);
  }

  var LabeledContainer = window.App.Widgets.LabeledContainer;

  var delegateTo = window.App.Utils.delegateTo;

  window.App.Widgets.Activity2 = Activity2;

}());
