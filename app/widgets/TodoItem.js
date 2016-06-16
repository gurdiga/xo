(function() {
  'use strict';

  function TodoItem() {
    var domElement = createDOMElement('li');

    this.appendTo = getAppenderOf(domElement);
  }

  var createDOMElement = window.App.Utils.createDOMElement;
  var getAppenderOf = window.App.Utils.getAppenderOf;

  window.App.Widgets.TodoItem = TodoItem;

}());
