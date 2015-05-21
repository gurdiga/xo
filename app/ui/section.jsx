'use strict';

var Section = React.createClass({
  render: function() {
    return (
      <fieldset>
        <legend>{this.props.label}</legend>

        { this.props.children }

      </fieldset>
    );
  }
});

module.exports = Section;
