'use strict';

var AddReactNameAttribute = require('mixins/add-react-name-attribute.js');

var DateField = require('./date-field.jsx');

var NewCaseDialog = React.createClass({
  mixins: [AddReactNameAttribute],

  render: function() {
    return (
      <div style={this.getStyle()}>
        <h1>Procedură de orgin general</h1>

        <DateField label='Data intentării' defaultValue='currentDate' />

        {this.getCloseButton()}
      </div>
    );
  },

  getStyle: function() {
    return {
      background: 'white',
      border: '1px solid #ddd',
      boxShadow: '2px 2px 7px rgba(0, 0, 0, 0.3)',
      padding: '10px 10px 90px 50px',
      position: 'absolute',
      width: '100%',
      height: '400px'
    };
  },

  getCloseButton: function() {
    return (
      <button onClick={this.props.close} style={getStyle()}>×</button>
    );

    function getStyle() {
      return {
        background: 'transparent',
        padding: '.1em .4em',
        position: 'absolute',
        right: '0',
        top: '0',
        font: 'inherit',
        fontSize: '20px',
        fontWeight: 'bold',
        lineHeight: '1',
        border: 'none'
      };
    }
  }
});

module.exports = NewCaseDialog;
