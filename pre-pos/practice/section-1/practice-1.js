'use strict';

function collectSameElements(collectionA, collectionB) {
  var collectionC = [10];
  var k = 0;
  for (var i = 0; i < collectionA.length; i++) {
    for (var j = 0; j < collectionB.length; j++) {
      if ((collectionA[i] === collectionB[j]) && collectionB [j]) {
        collectionC[k] = collectionA[i];
        k++;
      }
    }
  }
  return  collectionC;
}
