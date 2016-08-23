'use strict';

function merge(obj1, obj2) {

  for (let p in obj2) {
    if (obj2.hasOwnProperty(p)) {
      try {
        // Property in destination object set; update its value.
        if ( obj2[p].constructor==Object ) {
          obj1[p] = merge(obj1[p], obj2[p]);
        } else {
          obj1[p] = obj2[p];
        }
      } catch(e) {
        obj1[p] = obj2[p];
      }
    }
  }
  return obj1;
}

exports.merge = merge;
