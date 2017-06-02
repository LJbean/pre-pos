'use strict';

//function collectSameElements(collectionA, objectB) {
  function collectSameElements(collectionA, collectionB) {
    var collectionC = [10];
    var collect=[4];
    var k = 0;
    collect=collectionB.value;
    for (var i = 0; i < collectionA.length; i++) {
      for (var j = 0; j < collect.length; j++) {
        if ((collectionA[i] === collect[j]) && collect[j]) {
          collectionC[k] = collectionA[i];
          k++;
        }
      }
    }
    return collectionC;
  }


