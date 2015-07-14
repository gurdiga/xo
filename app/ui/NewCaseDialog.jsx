'use strict';

var Identifiable = require('mixins/identifiable.js');
var Styled = require('mixins/styled.js');
var Valuable = require('mixins/valuable.js');

var DateFormatting = require('utils/DateFormatting.js');

var DateField = require('./DateField.jsx');
var PersonSection = require('./PersonSection.jsx');
var CloseButton = require('./CloseButton.jsx');

var a = React.PropTypes;
var an = a;
var anObjectOfShape = React.PropTypes.shape;
var aDate = require('utils/proptype-a-date.js');

var NewCaseDialog = React.createClass({
  mixins: [Identifiable, Styled, Valuable],

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
      }).isRequired,
      'persoane-terţe': an.arrayOf(an.object)
    }).isRequired
  },

  getDefaultProps: function() {
    return {
      isOpened: false,
      value: {
        'data-intentării': DateFormatting.format(new Date(), 'dd.mm.yyyy'),
        'creditorul': {
          'gen-persoană': PersonSection.PERSON_TYPES.COMPANY
        },
        'debitorul': {
          'gen-persoană': PersonSection.PERSON_TYPES.INDIVIDUAL
        },
        'persoane-terţe': []
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
          style={{ marginBottom: '15px', width: '7.8em' }} />

        <PersonSection label='Creditor' {...this.makeValuable('creditorul')} />
        <PersonSection label='Debitor' {...this.makeValuable('debitorul')} />

        { this.state.value['persoane-terţe'].map(this.drawThirdParty) }

        <button
          onClick={this.addThirdParty}
          style={{ clear: 'left', float: 'left' }}
        >+ adaugă persoană terţă</button>

        <div style={{ clear: 'left', left: 'left' }}><button onClick={this.showValue}>Show value</button></div>

        <CloseButton onClick={this.props.onClose} />

      </div>
    );
  },

  addThirdParty: function() {
    this.setState({ value: { 'persoane-terţe': this.state.value['persoane-terţe'].concat([{}]) }});
  },

  drawThirdParty: function(data) {
    return <PersonSection label='Persoană terţă' {...this.makeValuable('persoane-terţe', data)} />;
  },

  showValue: function() {
    console.log(this.getValue());
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
