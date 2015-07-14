'use strict';

var SelectField = React.createClass({
  render: function() {
    return (
      <FieldLabel text={this.props.label}>
        <select style={selectStyle} onChange={this.onChange} value={this.state.value}>
          { this.props.children }
        </select>
      </FieldLabel>
    );
  },

  getInitialState: function() {
    return {
      value: this.props.value
    };
  },

  onChange: function(e) {
    this.setState({ value: e.target.value });

    if (this.props.onChange) this.props.onChange(e);
  },

  getValue: function() {
    return this.state.value;
  }
});

var selectStyle = {
  width: '16em',
  fontSize: '14px',
  position: 'absolute',
  marginTop: '-2px'
};

var FieldLabel = require('./FieldLabel.jsx');

module.exports = SelectField;
