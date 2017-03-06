import {RefusalActivity} from "app/widgets/activities/RefusalActivity";
import {assert} from "test/helper";

describe('RefusalActivity', function() {
  'use strict';

  var refusalActivity;

  before(function() {
    refusalActivity = new RefusalActivity();
  });

  it('has the appropriate description', function() {
    assert.equal(refusalActivity.getDescription(), 'Refuz');
  });

  it('can createWithData()', function() {
    var data = {};

    RefusalActivity.createWithData(data);

    // TODO
  });
});
