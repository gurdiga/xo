(function() {
  'use strict';

  function AddActivityButton(activities, activityAdder) {
    var dropdownOptions = getDropdownOptions(activities, activityAdder);
    var dropdownButton = createDropdownButton(dropdownOptions);

    this.appendTo = delegateTo(dropdownButton, 'appendTo');
  }

  function getDropdownOptions(activities, activityAdder) {
    var dropdownOptions = {};

    activities.forEach(function(activity) {
      dropdownOptions[activity.getDescription()] = activityAdder.bind(null, activity);
    });

    return dropdownOptions;
  }

  function createDropdownButton(dropdownOptions) {
    return new DropdownButton('adaugă acţiune', dropdownOptions);
  }

  var DropdownButton = window.App.Widgets.DropdownButton;

  var delegateTo = window.App.Utils.delegateTo;

  window.App.Widgets.AddActivityButton = AddActivityButton;

}());
