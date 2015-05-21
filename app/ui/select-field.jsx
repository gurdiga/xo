'use strict';

var FieldLabel = require('./field-label.jsx');

var SelectField = React.createClass({
  render: function() {
    return (
      <div>
        <FieldLabel htmlFor={this.props.id}>{this.props.label}</FieldLabel>

        <select id={this.props.id} onChange={this.props.onChange}>
          {this.props.children}
        </select>
      </div>
    );
  }
});

module.exports = SelectField;
