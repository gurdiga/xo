'use strict';

var _ = require('utils/_.js');

var i = 0;

var Valuable = {
  makeValuable: function(name, explicitValue) {
    return {
      ref: name,
      value: explicitValue || getValueFromState(this.state, name),
      isValuable: true,
      key: ++i
    };
  },

  getValue: function() {
    var hasValuableRefs = _.any(this.refs, 'props.isValuable');

    if (hasValuableRefs) return getValueOfValuableRefs(this);
    else return this.state.value;
  }
};

function getValueFromState(state, name) {
  return state.value[name];
}

function getValueOfValuableRefs(component) {
  var values = {};

  _.each(component.refs, function(ref, refName) {
    if (ref.props.isValuable) values[refName] = ref.getValue();
  });

  return values;
}

module.exports = Valuable;
