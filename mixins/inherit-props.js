'use strict';

var _ = require('utils/_');

var InheritProps = {
  makeInheritProps: function() {
    return _.pick(this.props, arguments);
  }
};

module.exports = InheritProps;
