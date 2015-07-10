'use strict';

var UI = require('./UI.jsx');

React.render(<UI/>, document.getElementById('ui'));

if (process.env.NODE_ENV === 'development') {
  require('../test/utils/DateFormattingTest.js');
  require('../test/UITest.jsx');
  require('../test/ui/TextFieldTest.jsx');
  require('../test/ui/LargeTextFieldTest.jsx');
  require('../test/ui/SelectFieldTest.jsx');
  require('../test/ui/FieldLabelTest.jsx');
  require('../test/ui/DateFieldTest.jsx');
  require('../test/ui/SectionTest.jsx');
  require('../test/ui/NewCaseButtonTest.jsx');
  require('../test/utils/keepingAtTopTest.js');
}
