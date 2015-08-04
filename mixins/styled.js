(function() {
  'use strict';

  var Styled = {
    makeStyled: function() {
      return {
        style: this.getStyle()
      };
    },

    getStyle: function() {
      var style = _.merge({}, this.style, this.props.style);

      _.each(style, function(name, value) {
        if (_.isFunction(value)) style[name] = value();
      });

      return style;
    }
  };

  window.Mixins.Styled = Styled;
}());
