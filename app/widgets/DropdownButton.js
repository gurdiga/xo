(function() {
  'use strict';

  function DropdownButton() {
    var domElement = document.createElement('dropdown-button');

    this.appendTo = getAppenderOf(domElement);
  }

  var getAppenderOf = window.App.Utils.getAppenderOf;

  window.App.Widgets.DropdownButton = DropdownButton;

}());
