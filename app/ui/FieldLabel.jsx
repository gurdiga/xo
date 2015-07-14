'use strict';

var FieldLabel = React.createClass({
  render: function() {
    return (
      <label style={labelLayoutStyle}>
        <span style={labelTextStyle}>{ this.props.text }</span>
        { this.props.children }
      </label>
    );
  }
});

var labelLayoutStyle = {
  display: 'block',
  margin: '0 0 3px 5px'
};

var labelTextStyle = {
  color: '#555',
  fontSize: '14px',
  display: 'inline-block',
  width: '11em'
};

module.exports = FieldLabel;
