import {DropdownButton} from "app/widgets/DropdownButton";
import {delegateTo} from "app/utils/delegateTo";

export function AddActivityButton(initialActivities, activityAdder) {
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
  var style = {
    'margin-top': '10px'
  };

  activities.forEach(function(activity) {
    var optionLabel = activity.getDescription();
    var optionHandler = getWrappedActivityAdder(originalActivityAdder, activities, activity);

    dropdownOptions[optionLabel] = optionHandler;
  });

  var dropdownButton = new DropdownButton('adaugă acţiune', dropdownOptions);

  dropdownButton.setStyle(style);

  return dropdownButton;
}

function getWrappedActivityAdder(originalActivityAdder, activities, activity) {
  return function() {
    resetArray(activities, activity.constructor.NEXT_ACTIVITY_OPTIONS);
    originalActivityAdder(activity);
  };
}
