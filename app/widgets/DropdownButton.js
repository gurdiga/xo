(function() {
  'use strict';

  function DropdownButton(labelText, options) {
    var domElement = document.createElement('dropdown-button');

    addToggleButton();
    addOptionList();

    this.appendTo = getAppenderOf(domElement);

    function addToggleButton() {
      var button = document.createElement('button');
      button.textContent = labelText;

      domElement.appendChild(button);
    }

    function addOptionList() {
      var optionList = document.createElement('ul');

      for (var optionLabel in options) {
        var option = document.createElement('li');
        option.textContent = optionLabel;
        optionList.appendChild(option);
      }

      domElement.appendChild(optionList);
    }
  }

  var getAppenderOf = window.App.Utils.getAppenderOf;

  window.App.Widgets.DropdownButton = DropdownButton;

}());
