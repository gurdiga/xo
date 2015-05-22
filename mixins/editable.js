'use strict';

var Editable = {
  makeEditable: function() {
    return {
      onChange: this.onChange
    };
  },

  onChange: function(e) {
    this.setState({ value: e.target.value });
  }
};

module.exports = Editable;
