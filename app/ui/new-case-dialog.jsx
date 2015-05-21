'use strict';

var WithStyleAttribute = require('mixins/with-style-attribute.js');
var DateField = require('./date-field.jsx');
var PersonSection = require('./person-section.jsx');

var NewCaseDialog = React.createClass({
  mixins: [WithStyleAttribute],

  render: function() {
    return (
      <div style={this.getStyle()}>
        <h1>Procedură de orgin general</h1>

        <DateField label='Data intentării' id='instituting-date' defaultValue='currentDate' />
        <PersonSection label='Creditor' />

        {this.getCloseButton()}

      </div>
    );
  },

  style: {
    background: 'white',
    border: '1px solid #ddd',
    boxShadow: '2px 2px 7px rgba(0, 0, 0, 0.3)',
    padding: '10px 10px 90px 50px',
    position: 'absolute',
    width: '100%',
    height: '400px'
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
