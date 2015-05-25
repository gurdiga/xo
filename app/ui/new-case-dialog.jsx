'use strict';

var Styled = require('mixins/styled');

var DateField = require('./date-field.jsx');
var PersonSection = require('./person-section.jsx');
var CloseButton = require('./close-button.jsx');
var NakedButton = require('./naked-button.jsx');

var NewCaseDialog = React.createClass({
  mixins: [Styled],

  render: function() {
    if (!this.props.isOpened) return null;

    return (
      <div {...this.makeStyled()}>
        <h1>Procedură de ordin general</h1>

        <DateField label='Data intentării' value='<current date>'
          style={{ marginBottom: '15px', width: '5.8em' }} />

        <PersonSection label='Creditor' />
        <PersonSection label='Debitor' personType='fizică' />

        <NakedButton onClick={this.addThirdParty}>+ adaugă persoană terţă</NakedButton>

        <CloseButton onClick={this.props.onClose} />

      </div>
    );
  },

  style: {
    background: 'white',
    border: '1px solid #ddd',
    boxShadow: '2px 2px 7px rgba(0, 0, 0, 0.3)',
    padding: '10px 10px 90px 50px',
    position: 'absolute',
    width: '100%'
  }
});

module.exports = NewCaseDialog;
