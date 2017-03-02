import * as _ from "lodash";

export function createEnumArray(hash) {
  var array = _.values(hash);

  _.each(hash, function(v, k) {
    Object.defineProperty(array, k, {
      value: v,
      enumerable: false
    });
  });

  return array;
}
