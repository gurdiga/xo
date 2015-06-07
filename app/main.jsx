'use strict';

var UI = require('./ui.jsx');

React.render(<UI/>, document.body);

if (process.env.NODE_ENV === 'development') {
  require('../test/utils/DateFormattingTest.js');
  require('../test/ui.jsx');
  require('../test/ui/TextFieldTest.jsx');
  require('../test/ui/LargeTextFieldTest.jsx');
  require('../test/ui/SelectFieldTest.jsx');
  require('../test/ui/FieldLabelTest.jsx');
  require('../test/ui/DateFieldTest.jsx');
}
