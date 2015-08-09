(function() {
  'use strict';

  var i = 0;

  var Valuable = {
    makeValuable: function(refName, explicitValue) {
      var isArrayRef = !!explicitValue;
      var value;

      if (isArrayRef) {
        var arrayIndex = this.state.value[refName].indexOf(explicitValue);
        refName = refName + '[' + arrayIndex + ']';
        value = explicitValue;
      } else {
        value = this.state.value[refName];
      }

      return {
        ref: refName,
        value: value,
        isValuable: true,
        key: ++i
      };
    },

    getValue: function() {
      var isValuableContainer = _.any(this.refs, 'props.isValuable');

      if (isValuableContainer) return getValueOfValuableRefs(this);
      else return this.state.value;
    }
  };


  var ARRAY_REF_FORMAT = /(.+)\[\d+\]$/;

  function getValueOfValuableRefs(component) {
    var values = {};

    _.each(component.refs, function(ref, refName) {
      if (!ref.props.isValuable) return;

      if (isArrayRefName(refName)) {
        refName = getRefName(refName);
        if (!values[refName]) values[refName] = [];
        values[refName].push(ref.getValue());
      } else {
        values[refName] = ref.getValue();
      }
    });

    return values;
  }

  function isArrayRefName(refName) {
    return ARRAY_REF_FORMAT.test(refName);
  }

  function getRefName(arrayRefName) {
    var parts = arrayRefName.match(ARRAY_REF_FORMAT);
    return parts[1];
  }

  window.App.Mixins.Valuable = Valuable;
}());
