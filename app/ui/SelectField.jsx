'use strict';

var SelectField = {};

SelectField.render = function() {
  return (
    <label style={labelLayoutStyle}>
      <span style={labelTextStyle}>{ this.props.label }</span>
      <select>
        <option>option</option>
      </select>
    </label>
  );
};

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

module.exports = React.createClass(SelectField);
