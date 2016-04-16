(function() {
  'use strict';

  function AddActivityButton(activities) {
    var dropdownOptions = getDropdownOptions(activities);
    var dropdownButton = createDropdownButton(dropdownOptions);

    this.appendTo = delegateTo(dropdownButton, 'appendTo');
  }

  function getDropdownOptions(activities) {
    var dropdownOptions = {};

    activities.forEach(function(activity) {
      dropdownOptions[activity.getDescription()] = createActivityAdder(activity);
    });

    return dropdownOptions;
  }

  function createActivityAdder(activity) {
    return function() {
      //
      // TODO
      //
      console.log('adding activity', activity);
    };
  }

  function createDropdownButton(dropdownOptions) {
    return new DropdownButton('adaugă acţiune', dropdownOptions);
  }

  var DropdownButton = window.App.Widgets.DropdownButton;

  var delegateTo = window.App.Utils.delegateTo;

  window.App.Widgets.AddActivityButton = AddActivityButton;

}());
