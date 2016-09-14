(function() {
  'use strict';

  function activityDetails(input) {
    var domStructure = {
      tagName: 'activity-details',
      childNodes: ['The activity details'].concat(optional(input, 'additionalChildNodes'))
    };

    return domStructure;
  }

  function optional(input, memberName) {
    if (input && input[memberName]) {
      return input[memberName];
    } else {
      return [];
    }
  }

  window.App.Widgets.activityDetails = activityDetails;

}());
