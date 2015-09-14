(function() {
  'use strict';

  function DropdownButton(labelText, options) {
    var domElement = document.createElement('dropdown-button');

    var toggleButton = createButton();
    domElement.appendChild(toggleButton);

    var optionList = createOptionList();
    domElement.appendChild(optionList);

    toggleButton.addEventListener('click', function() {
      if (optionList.style.display === 'none') optionList.style.display = 'block';
      else optionList.style.display = 'none';
    });

    this.appendTo = getAppenderOf(domElement);

    function createButton() {
      var button = document.createElement('button');
      button.textContent = labelText;
      return button;
    }

    function createOptionList() {
      var optionList = document.createElement('ul');
      optionList.style.display = 'none';

      for (var optionLabel in options) {
        var button = document.createElement('button');
        button.textContent = optionLabel;
        button.addEventListener('click', options[optionLabel]);

        var option = document.createElement('li');
        option.appendChild(button);

        optionList.appendChild(option);
      }

      return optionList;
    }
  }

  var getAppenderOf = window.App.Utils.getAppenderOf;

  window.App.Widgets.DropdownButton = DropdownButton;

}());
