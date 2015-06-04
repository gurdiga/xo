'use strict';

var SelectField = {};

SelectField.render = function() {
  return (
    <FieldLabel text={this.props.label}>
      <select style={selectStyle} onChange={this.onChange} value={this.state.value}>
        { this.props.children }
      </select>
    </FieldLabel>
  );
};

SelectField.getInitialState = function() {
  return {
    value: this.props.value
  };
};

SelectField.onChange = function(e) {
  this.setState({ value: e.target.value });

  if (this.props.onChange) this.props.onChange(e);
};

var selectStyle = {
  width: '16em',
  fontSize: '14px',
  position: 'absolute',
  marginTop: '-2px'
};

SelectField.getValue = function() {
  return this.state.value;
};

var FieldLabel = require('./FieldLabel.jsx');

module.exports = React.createClass(SelectField);
