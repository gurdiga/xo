'use strict';

var UI = window.App.UI;

React.render(e(UI), document.getElementById('ui'));

if (process.env.NODE_ENV === 'development') {
  require('../test/utils/DateFormattingTest.js');
  require('../test/UITest.js');
  require('../test/ui/TextFieldTest.js');
  require('../test/ui/LargeTextFieldTest.js');
  require('../test/ui/SelectFieldTest.js');
  require('../test/ui/FieldLabelTest.js');
  require('../test/ui/DateFieldTest.js');
  require('../test/ui/SectionTest.js');
  require('../test/ui/NewCaseButtonTest.js');
  require('../test/utils/keepingAtTopTest.js');
  require('../test/ui/PersonSectionTest.js');
}
