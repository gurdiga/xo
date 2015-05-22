'use strict';

var FieldContainer = require('./field-container.jsx');
var FieldLabel = require('./field-label.jsx');

var SelectField = React.createClass({
  render: function() {
    return (
      <FieldContainer>
        <FieldLabel htmlFor={this.props.id}>{this.props.label}</FieldLabel>

        <select id={this.props.id} onChange={this.props.onChange}>
          {this.props.children}
        </select>
      </FieldContainer>
    );
  }
});

module.exports = SelectField;
