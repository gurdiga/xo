'use strict';

var OutlinedOnFocus = {
  makeOutlinedOnFocus: function() {
    this.style = this.style || {};
    this.style.transition = 'box-shadow 250ms ease-out';

    return {
      onFocus: this.onFocus,
      onBlur: this.onBlur
    };
  },

  onFocus: function() {
    this.style.boxShadow = '0 0 3px 2px #b5d5ff';
    this.forceUpdate();
  },

  onBlur: function() {
    this.style.boxShadow = 'none';
    this.forceUpdate();
  }
};

module.exports = OutlinedOnFocus;
