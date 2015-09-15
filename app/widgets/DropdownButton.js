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
      var style = {
        position: 'absolute',
        display: 'none',
        paddingLeft: '0px',
        marginTop: '0px',
        marginBottom: '0px',
        backgroundColor: 'white'
      };
      _.extend(optionList.style, style);

      for (var optionLabel in options) {
        addOption(optionLabel, options[optionLabel]);
      }

      return optionList;

      function addOption(labelText, f) {
        var button = document.createElement('button');
        button.textContent = labelText;
        button.addEventListener('click', f);
        button.style.borderWidth = '0px';
        button.style.backgroundColor = 'transparent';
        button.style.width = '100%';
        button.style.textAlign = 'left';

        var option = document.createElement('li');
        option.appendChild(button);

        optionList.appendChild(option);
      }
    }
  }

  var getAppenderOf = window.App.Utils.getAppenderOf;

  window.App.Widgets.DropdownButton = DropdownButton;

}());
