'use strict';

function countSameElements(collection) {
    var collectionC = [];
    for(var i of collection) {
      if(i.length===1){//判断是否为单纯的字符
        if (Behere(collectionC, i)) {//判断是否存在这个数，如果存在就count++
          addCount(collectionC,i);
        }
        else//不存在就创建对象
          collectionC.push({name: i, summary: 1});
      }
      else{//不单纯则另外处理
        var counts=GetNum(i);
        if(Behere(collectionC,i[0])){
          for(var k=0;k<(counts);k++){
            addCount(collectionC,i[0]);
          }
        }
        else
          collectionC.push({name: i[0],summary:counts[0]});
      }
    }
    return collectionC;
  }

  function GetNum(arr){//解析出数字
    var GetNumArr = [];
    for(var j of arr){
      if(j>=0&&j<=9){
        GetNumArr.push(j);
      }
    }
    var a = GetNumArr.map(Number);//将字符串转换为数字
    if(a.length>1){return a[0]*10+a[1];}//t[10]
    return a;
  }

  function addCount(collectionC,a){
    collectionC.forEach(function (element) {
      if (a === element.name) {
        element.summary++;
      }
    });
  }

  function Behere(collectionC,a){//判断
    var m=false;
    collectionC.forEach(function (element) {
      if(element.name===a)
      {  m=true;}
    })
    return m;
  }
