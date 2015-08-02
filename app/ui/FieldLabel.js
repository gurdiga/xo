'use strict';

var FieldLabel = React.createClass({
  render: function() {
    return (
      e('label', {style: labelLayoutStyle},
        e('span', {style: labelTextStyle}, this.props.text),
        this.props.children
      )
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
