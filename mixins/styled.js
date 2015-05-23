'use strict';

var _ = require('utils/_.js');

var Styled = {
  makeStyled: function() {
    return {
      style: this.getStyle()
    };
  },

  getStyle: function() {
    verifyStyleIsAnObject('this.style', this.style);
    verifyStyleIsAnObject('this.props.style', this.props.style);

    var style = _.merge({}, this.style, this.props.style);

    evalFunctions(style);

    return style;
  }
};

function verifyStyleIsAnObject(label, style) {
  if (!style) return;
  if (!_.isPlainObject(style)) throw 'TextField: the inputStyle prop should be an object: ' + label;
}

function evalFunctions(style) {
  _.each(style, function(name, value) {
    if (_.isFunction(value)) style[name] = value();
  });
}

module.exports = Styled;
