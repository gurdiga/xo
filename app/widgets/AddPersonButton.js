(function() {
  'use strict';

  function AddPersonButton(labelText) {
    var domElement = document.createElement('add-person-button');

    var button = document.createElement('button');
    button.textContent = labelText;
    domElement.appendChild(button);

    this.appendTo = getAppenderOf(domElement);

    this.onClick = function(f) {
      button.addEventListener('click', f);
    };
  }

  var getAppenderOf = window.App.Utils.getAppenderOf;

  window.App.Widgets.AddPersonButton = AddPersonButton;

}());
