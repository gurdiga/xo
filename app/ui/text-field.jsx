'use strict';

var _ = require('utils/_.js');

var TextField = React.createClass({
  getInitialState: function() {
    return {
      value: this.props.defaultValue
    };
  },

  render: function() {
    return (
      <div>
        <label
          htmlFor={this.props.id}
          style={this.getLabelStyle()}
        >{this.props.label}</label>

        <input
          id={this.props.id}
          value={this.state.value}
          style={this.getInputStyle()}
          className={this.props.className}
          onChange={this.onChange}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
        />
      </div>
    );
  },

  onChange: function(e) {
    this.setState({ value: e.target.value });
  },

  onFocus: function() {
    this.setState({ isFocused: true });
  },

  onBlur: function() {
    this.setState({ isFocused: false });
  },

  getLabelStyle: function() {
    var style = {
      fontSize: '14px',
      fontFamily: 'sans-serif',
      display: 'inline-block',
      width: '11em',
      color: '#555',
      marginBottom: '2px',
      position: 'relative'
    };

    this.appendStyle(style, this.props.labelStyle);

    return style;
  },

  getInputStyle: function() {
    var style = {
      color: 'black',
      padding: '4px',
      font: 'bold 14px sans-serif',
      backgroundImage: 'url("data:image/gif;base64,R0lGODlhMgAYAIABAN3d3f///yH5BAEKAAEALAAAAAAyABgAAAIrjI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyrAGBjd96zu9+D/wFCgA7")',
      backgroundPosition: '0 -4px',
      borderRadius: '2px',
      border: 'none',
      outline: 'none',
      boxShadow: this.state.isFocused ? '0 0 3px 2px #b5d5ff' : 'none',
      margin: '0'
    };

    this.appendStyle(style, this.props.inputStyle);

    return style;
  },

  appendStyle: function(style, additionalStyle) {
    if (additionalStyle) {
      if (_.isPlainObject(additionalStyle)) _.merge(style, additionalStyle);
      else console.warn('TextField: inputStyle prop should be an object');
    }
  }
});

module.exports = TextField;
