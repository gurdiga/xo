'use strict';

var DateFormatting = {
  format: function(date, mask) {
    /*global moment*/
    var momentSpecificMask = mask
      .replace('mm', 'MM')
      .replace('dd', 'DD')
      .replace('yyyy', 'YYYY');

    return moment(date).format(momentSpecificMask);
  }
};

module.exports = DateFormatting;
