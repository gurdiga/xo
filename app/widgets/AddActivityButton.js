(function() {
  'use strict';

  function AddActivityButton() {
    var dropdownButton = new DropdownButton('adaugă acţiune');

    this.appendTo = delegateTo(dropdownButton, 'appendTo');
  }

  var DropdownButton = window.App.Widgets.DropdownButton;

  var delegateTo = window.App.Utils.delegateTo;

  window.App.Widgets.AddActivityButton = AddActivityButton;

}());
