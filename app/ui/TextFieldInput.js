(function() {
  'use strict';

  var TextFieldInput = React.createClass({
    displayName: 'TextFieldInput',

    render: function() {
      return (
        e('input', _.merge({
          type: 'text',
          value: this.state.value
        },
          this.makeEditable(),
          this.makeStyled(),
          this.makeOutlinedOnFocus()
        ))
      );
    },

    getInitialState: function() {
      return {
        value: this.props.value
      };
    },

    getValue: function() {
      return this.state.value;
    },

    style: getInputStyle(),

    mixins: [
      window.Mixins.Editable,
      require('mixins/styled.js'),
      window.Mixins.OutlinedOnFocus
    ],

    statics: {
      style: getInputStyle()
    }
  });

  function getInputStyle() {
    return {
      color: 'black',
      padding: '4px',
      font: 'bold 14px sans-serif',
      width: '16em',
      backgroundImage: 'url(data:image/gif;base64,R0lGODlhMgAYAIABAN3d3f///yH5BAEKAAEALAAAAAAyABgAAAIrjI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyrAGBjd96zu9+D/wFCgA7)',
      backgroundPosition: '0 -4px',
      borderRadius: '2px',
      border: 'none',
      outline: 'none'
    };
  }

  window.App.TextFieldInput = TextFieldInput;
}());
