// 编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组
var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];
function fun(arr){
  var newArr=[];
  //去除扁平化
  arr.map(item=>{
    if(Array.isArray(item)){
      newArr=newArr.concat(fun(item));
    }else{
      newArr.push(item);
    }
  });
  //数组去重
  newArr = newArr.filter((item,index)=>{
    return newArr.indexOf(item)===index;
  });
  //排序
  return newArr.sort((x,y)=>{
    return x-y;
  });
}
fun(arr);