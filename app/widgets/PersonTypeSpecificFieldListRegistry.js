(function() {
  'use strict';

  var PersonTypeSpecificFieldListRegistry = {
    findByName: function(personTypeName) {
      var personTypeByName = {};

      personTypeByName[IndividualFieldList.PERSON_TYPE_NAME] = IndividualFieldList;
      personTypeByName[CompanyFieldList.PERSON_TYPE_NAME] = CompanyFieldList;

      return personTypeByName[personTypeName];
    }
  };

  var IndividualFieldList = window.App.Widgets.IndividualFieldList;
  var CompanyFieldList = window.App.Widgets.CompanyFieldList;

  window.App.Widgets.PersonTypeSpecificFieldListRegistry = PersonTypeSpecificFieldListRegistry;

}());
