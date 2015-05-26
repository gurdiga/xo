'use strict';

var Editable = {
  makeEditable: function() {
    return {
      onChange: onChange.bind(this)
    };
  },
};

function onChange(e) {
  /*jshint validthis:true*/
  this.setState({ value: e.target.value });

  if ('onChange' in this.props) this.props.onChange.call(this, e);
}

module.exports = Editable;
