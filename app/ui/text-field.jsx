'use strict';

var Styled = require('mixins/styled');
var FieldContainer = require('./field-container.jsx');
var FieldLabel = require('./field-label.jsx');

var TextField = React.createClass({
  mixins: [Styled],

  getInitialState: function() {
    return {
      value: this.props.defaultValue
    };
  },

  render: function() {
    return (
      <FieldContainer>
        <FieldLabel htmlFor={this.props.id}>{this.props.label}</FieldLabel>

        <input
          id={this.props.id}
          value={this.state.value}
          style={this.getStyle()}
          className={this.props.className}
          onChange={this.onChange}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
        />
      </FieldContainer>
    );
  },

  onChange: function(e) {
    this.setState({ value: e.target.value });
  },

  onFocus: function() {
    this.style.boxShadow = '0 0 3px 2px #b5d5ff';
    this.forceUpdate();
  },

  onBlur: function() {
    this.style.boxShadow = 'none';
    this.forceUpdate();
  },

  style: {
    color: 'black',
    padding: '4px',
    font: 'bold 14px sans-serif',
    backgroundImage: 'url("data:image/gif;base64,R0lGODlhMgAYAIABAN3d3f///yH5BAEKAAEALAAAAAAyABgAAAIrjI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyrAGBjd96zu9+D/wFCgA7")',
    backgroundPosition: '0 -4px',
    borderRadius: '2px',
    border: 'none',
    outline: 'none'
  }
});

module.exports = TextField;
