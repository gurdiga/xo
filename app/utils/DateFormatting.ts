import * as _ from "lodash";
import * as moment from "moment";
import {assert} from "app/utils/assert";

export const DateFormatting = {
  format: function(date, mask) {
    assert(_.isDate(date),
      'DateFormatting.format: the first argument is required and has to be a JS Date instance');
    assert(_.isString(mask),
      'DateFormatting.format: the second argument is required and has to be a string representing the date format mask to represent date as');

    return moment(date).format(mask);
  },

  parse: function(dateString, mask) {
    assert(!!dateString && _.isString(dateString),
      'DateFormatting.parse: the first argument is required and has to be a string representing the date');
    assert(_.isString(mask),
      'DateFormatting.parse: the second argument is required and has to be a string representing the date format mask');

    return moment(dateString, mask).toDate();
  }
};
