(function() {
  'use strict';

  function AddActivityButton(activities, activityAdder) {
    // TODO: rethink this, it’s too low-level
    activities = copyArray(activities);

    var dropdownOptions = getDropdownOptions(activities, activityAdder);
    var dropdownButton = createDropdownButton(dropdownOptions);

    this.appendTo = delegateTo(dropdownButton, 'appendTo');

    this.getActivities = function() {
      return activities;
    };
  }

  function copyArray(array) {
    return [].concat(array);
  }

  function getDropdownOptions(activities, activityAdder) {
    var dropdownOptions = {};

    activities.forEach(function(activity) {
      dropdownOptions[activity.getDescription()] = function() {
        //
        // DOTO: clean this up
        //
        activities.splice(0);
        activities.push.apply(
          activities,
          activity.constructor.NEXT_STEP_OPTIONS // TODO: does this mean options
                                                 // should be classes rather than instances?
        );
        activityAdder(activity);
      };
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
