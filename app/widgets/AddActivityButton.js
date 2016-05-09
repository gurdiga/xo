(function() {
  'use strict';

  function AddActivityButton(initialActivities, activityAdder) {
    var activities = getAnArrayCopyToMutate(initialActivities);
    var dropdownButton = createDropdownButton(activities, activityAdder);

    this.appendTo = delegateTo(dropdownButton, 'appendTo');

    this.getActivities = function() {
      return activities;
    };
  }

  function getAnArrayCopyToMutate(array) {
    return [].concat(array);
  }

  function emptyArray(array) {
    array.splice(0, array.length);
  }

  function resetArray(array, otherArray) {
    emptyArray(array);
    extendArray(array, otherArray);
  }

  function extendArray(array, otherArray) {
    otherArray.forEach(function(item) {
      array.push(item);
    });
  }

  function createDropdownButton(activities, originalActivityAdder) {
    var dropdownOptions = {};
    var additionalStyle = {
      'margin-top': '10px'
    };

    activities.forEach(function(activity) {
      var optionLabel = activity.getDescription();
      var optionHandler = getWrappedActivityAdder(originalActivityAdder, activities, activity);

      dropdownOptions[optionLabel] = optionHandler;
    });

    return new DropdownButton('adaugă acţiune', dropdownOptions, additionalStyle);
  }

  function getWrappedActivityAdder(originalActivityAdder, activities, activity) {
    return function() {
      resetArray(activities, activity.constructor.NEXT_STEP_OPTIONS);
      originalActivityAdder(activity);
    };
  }

  var DropdownButton = window.App.Widgets.DropdownButton;

  var delegateTo = window.App.Utils.delegateTo;

  window.App.Widgets.AddActivityButton = AddActivityButton;

}());
