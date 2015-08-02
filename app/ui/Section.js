'use strict';

var Section = React.createClass({
  displayName: 'Section',

  render: function() {
    return (
      e('fieldset', {style: fieldsetStyle},
        e('legend', {style: legendStyle}, this.props.label),
        this.props.children
      )
    );
  },

  propTypes: {
    label: React.PropTypes.string.isRequired
  }
});

var fieldsetStyle = {
  float: 'left',
  width: '43%',
  border: 'none',
  margin: '0 7% 10px 0',
  padding: '10px 0 0'
};

var legendStyle = {
  color: 'white',
  backgroundColor: '#333',
  width: '100%',
  fontWeight: 'bold',
  fontSize: '22px',
  padding: '8px 0 8px 6px'
};

module.exports = Section;
