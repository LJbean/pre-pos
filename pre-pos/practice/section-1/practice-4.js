'use strict';

  function collectSameElements(collectionA, collectionB) {
    var collectionC = [10];
    var k = 0;
    for (var i = 0; i < collectionA.length; i++) {
      for (var j = 0; j < collectionB.value.length; j++) {
        if ((collectionA[i].key === collectionB.value[j]) && collectionB.value[j]) {
          collectionC[k] = collectionA[i].key;
          k++;
        }
      }
    }
    return  collectionC;
  }

