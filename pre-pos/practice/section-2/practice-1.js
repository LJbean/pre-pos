'use strict';

function countSameElements(collection) {

  var collectionC = [];
  for (var i of collection) {
    if(Behere(collectionC,i))
    {  //判断是否存在这个数，如果存在就count++
       collectionC.forEach(function (element) {
          if (i === element.key) {
            element.count++;
          }
        });
      }
      else//不存在就创建对象
        collectionC.push({key: i, count: 1});
    }
    return collectionC;
  }

  function Behere(collectionC,a){//判断
    var m=false;
    collectionC.forEach(function (element) {
      if(element.key===a)
      {  m=true;}
    })
    return m;
  }


