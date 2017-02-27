(function() {
  'use strict';

  var sequence = 1;

  function getUID() {
    return 'uid' + ++sequence;
  }

  window.App.Utils.getUID = getUID;

}());
