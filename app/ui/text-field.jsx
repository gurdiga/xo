'use strict';

var TextField = React.createClass({
  render: function() {
    return (
      <div>
        <label htmlFor={this.props.id} style={this.getStyle()}>{this.props.label}</label>
        <input id={this.props.id} value={this.props.defaultValue} className={this.props.className} />
      </div>
    );
  },

  getStyle: function() {
    return {
      marginBottom: '2px',
      position: 'relative',
    };
  }
});

module.exports = TextField;
