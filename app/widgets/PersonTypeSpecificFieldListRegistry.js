(function() {
  'use strict';

  var PersonTypeSpecificFieldListRegistry = {
    findByName: function(personTypeName) {
      var personTypeByName = {};

      personTypeByName[PersonFieldList.PERSON_TYPE_NAME] = PersonFieldList;
      personTypeByName[CompanyFieldList.PERSON_TYPE_NAME] = CompanyFieldList;

      return personTypeByName[personTypeName];
    }
  };

  var PersonFieldList = window.App.Widgets.PersonFieldList;
  var CompanyFieldList = window.App.Widgets.CompanyFieldList;

  window.App.Widgets.PersonTypeSpecificFieldListRegistry = PersonTypeSpecificFieldListRegistry;

}());
