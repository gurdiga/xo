(function() {
  'use strict';

  Array.prototype.remove = function(item) {
    var index = this.indexOf(item);
    this.splice(index, 1);
  };

}());
