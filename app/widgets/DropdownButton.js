(function() {
  'use strict';

  function DropdownButton(labelText, options) {
    var domElement = document.createElement('dropdown-button');
    domElement.style.display = 'inline-block';

    var toggleButton = createButton();
    domElement.appendChild(toggleButton);

    var optionList = createOptionList();
    domElement.appendChild(optionList);

    toggleButton.addEventListener('click', function(e) {
      e.stopPropagation();

      if (isOptionListShown()) hideOptionList();
      else showOptionList();
    });

    document.body.addEventListener('keydown', hideOptionList);
    document.body.addEventListener('click', hideOptionList);

    this.appendTo = getAppenderOf(domElement);

    function showOptionList() {
      optionList.style.display = 'block';
    }

    function hideOptionList() {
      optionList.style.display = 'none';
    }

    function isOptionListShown() {
      return optionList.style.display === 'block';
    }

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
        backgroundColor: 'white',
        boxShadow: 'rgba(0, 0, 0, 0.298039) 1px 1px 3px',
        listStyleType: 'none'
      };
      _.extend(optionList.style, style);

      for (var optionLabel in options) {
        addOption(optionLabel, options[optionLabel]);
      }

      return optionList;

      function addOption(labelText, f) {
        var button = document.createElement('button');
        button.textContent = labelText;
        button.style.borderWidth = '0px';
        button.style.backgroundColor = 'transparent';
        button.style.width = '100%';
        button.style.textAlign = 'left';

        button.addEventListener('click', function() {
          hideOptionList();
          f();
        });

        addHoverEffect(button, {
          backgroundColor: 'c3c3c3'
        });

        var option = document.createElement('li');
        option.appendChild(button);

        optionList.appendChild(option);
      }
    }
  }

  var getAppenderOf = window.App.Utils.getAppenderOf;
  var addHoverEffect = window.App.Utils.addHoverEffect;

  window.App.Widgets.DropdownButton = DropdownButton;

}());
