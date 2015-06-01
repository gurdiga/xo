'use strict';

var TextField = {};

TextField.render = function() {
  return (
    <label>
      { this.props.label }
      <input
        type='text'
        value={this.state.value}
        {...this.makeEditable()}
      />
    </label>
  );
};

TextField.getInitialState = function() {
  return {
    value: this.props.value
  };
};

TextField.getValue = function() {
  return this.state.value;
};

TextField.mixins = [
  require('mixins/editable.js')
];

module.exports = React.createClass(TextField);
