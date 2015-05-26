'use strict';

var Styled = require('mixins/styled.js');
var Valuable = require('mixins/valuable.js');

var DateField = require('./date-field.jsx');
var PersonSection = require('./person-section.jsx');
var CloseButton = require('./close-button.jsx');
var NakedButton = require('./naked-button.jsx');

var a = React.PropTypes;
var anObjectOfShape = React.PropTypes.shape;
var aDate = require('utils/proptype-a-date.js');

var NewCaseDialog = React.createClass({
  mixins: [Styled, Valuable],

  propTypes: {
    isOpened: a.bool,
    onClose: a.func.isRequired,
    value: anObjectOfShape({
      'data-intentării': aDate.isRequired,
      'creditorul': anObjectOfShape({
        'gen-persoană': a.oneOf(PersonSection.PERSON_TYPES)
      }).isRequired,
      'debitorul': anObjectOfShape({
        'gen-persoană': a.oneOf(PersonSection.PERSON_TYPES)
      }).isRequired
    }).isRequired
  },

  getDefaultProps: function() {
    return {
      isOpened: false,
      value: {
        'data-intentării': '<today>',
        'creditorul': {
          'gen-persoană': PersonSection.PERSON_TYPES.COMPANY
        },
        'debitorul': {
          'gen-persoană': PersonSection.PERSON_TYPES.INDIVIDUAL
        }
      }
    };
  },

  getInitialState: function() {
    return {
      value: this.props.value
    };
  },

  render: function() {
    if (!this.props.isOpened) return null;

    return (
      <div {...this.makeStyled()}>
        <h1>Procedură de ordin general</h1>

        <DateField label='Data intentării' {...this.makeValuable('data-intentării')}
          style={{ marginBottom: '15px', width: '5.8em' }} />

        <PersonSection label='Creditor' {...this.makeValuable('creditorul')} />
        <PersonSection label='Debitor' {...this.makeValuable('debitorul')} />

        <NakedButton onClick={this.addThirdParty}>+ adaugă persoană terţă</NakedButton>

        <CloseButton onClick={this.props.onClose} />

      </div>
    );
  },

  addThirdParty: function() {
    console.log('getValue', this.getValue());
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
