(function() {
  'use strict';

  /*global moment*/

  var DateFormatting = {
    format: function(date, mask) {
      assert(_.isDate(date),
        'DateFormatting.format: the first argument is required and has to be a JS Date instance');
      assert(_.isString(mask),
        'DateFormatting.format: the second argument is required and has to be a string representing the date format mask to represent date as');

      var momentMask = getMomentMask(mask);

      return moment(date).format(momentMask);
    },

    parse: function(dateString, mask) {
      assert(!!dateString && _.isString(dateString),
        'DateFormatting.parse: the first argument is required and has to be a string representing the date');
      assert(_.isString(mask),
        'DateFormatting.parse: the second argument is required and has to be a string representing the date format mask');

      var momentMask = getMomentMask(mask);

      return moment(dateString, momentMask).toDate();
    }
  };

  var MASK_TRANSFORMATIONS = {
    'mm': 'MM',
    'dd': 'DD',
    'yyyy': 'YYYY'
  };

  function getMomentMask(appMask) {
    return _.reduce(MASK_TRANSFORMATIONS, function transformMask(appMask, to, from) {
      return appMask.replace(from, to);
    }, appMask);
  }

  var assert = window.App.Utils.assert;

  window.App.Utils.DateFormatting = DateFormatting;
}());
