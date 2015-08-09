(function() {
  'use strict';

  var Styled = window.App.Mixins.Styled;
  var Identifiable = window.App.Mixins.Identifiable;

  var a = React.PropTypes;
  var an = a;

  var NewCaseButton = React.createClass({
    displayName: 'NewCaseButton',
    mixins: [Identifiable, Styled],

    propTypes: {
      onClick: a.func.isRequired,
      style: an.object
    },

    render: function() {
      return (
        e('button', _.merge({
          onClick: this.props.onClick
        },
          this.makeStyled()
        ),
        'Procedură nouă'
        )
      );
    },

    style: {
      padding: '.5em 1em',
      fontSize: '1.5em',
      fontWeight: 'bold',
      background: 'white',
      border: '1px solid #ccc',
      borderRadius: '5px'
    }
  });

  window.App.Widgets.NewCaseButton = NewCaseButton;
}());
