//测试   隔一秒打印数组的下一项
const Watch = require('./watchTest');
const arr = [1,2,3,4,5];
const w = new Watch();

let index=0;
//设置一个延时器，在特定的时间里打印
function print(num,time) { 
  setTimeout(function () { 
    console.log(num);
    index ++;
    if(index>arr.length-1){
      return;
    }
    print(arr[index],index);
  },time*1000);    
}

print(arr[0],0);

w.on('printSuccess',()=>{
  doSomeThing;
});

function doSomeThing() { 

}
