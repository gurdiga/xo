'use strict';

var SelectField = React.createClass({
  displayName: 'SelectField',

  render: function() {
    return (
      e(FieldLabel, {text: this.props.label},
        e('select', {
          style: selectStyle,
          onChange: this.onChange,
          value: this.state.value
        },
          this.props.children
        )
      )
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

var FieldLabel = window.App.FieldLabel;

module.exports = SelectField;
