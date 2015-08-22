(function() {
  'use strict';

  var LargeTextField = React.createClass({
    displayName: 'LargeTextField',

    render: function() {
      return (
        e(FieldLabel, {text: this.props.label},
          e('textarea', _.merge({
            value: this.state.value,
            onChange: this.onChange,
            style: this.style
          },
            this.makeOutlinedOnFocus()
          ))
        )
      );
    },

    getValue: function() {
      return this.state.value;
    },

    getInitialState: function() {
      return {
        value: this.props.value
      };
    },

    onChange: function(e) {
      this.setState({ value: e.target.value });
    },

    style: {
      color: 'black',
      padding: '4px',
      marginLeft: '1em',
      font: 'bold 14px/1.75 sans-serif',
      width: '26em',
      height: '5.8em',
      backgroundImage: 'url(data:image/gif;base64,R0lGODlhMgAYAIABAN3d3f///yH5BAEKAAEALAAAAAAyABgAAAIrjI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyrAGBjd96zu9+D/wFCgA7)',
      borderRadius: '2px',
      border: 'none',
      outline: 'none',
      resize: 'none'
    },

    mixins: [
      window.App.Mixins.OutlinedOnFocus
    ]
  });

  var FieldLabel = window.App.Widgets.FieldLabel;

  window.App.Widgets.LargeTextField = LargeTextField;
}());