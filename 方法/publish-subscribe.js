//监听 发布订阅者模式

function Watch(){

  this.listener={};
}

/**
 * 注册一个监听者
 * @param {String} type 订阅者事件类型
 * @param {Function} listener 监听器事件
 */

//订阅
Watch.prototype.on=function(type,listener){
  //判断是否是数组
  if(!Array.isArray(this.listener[type])){
    this.listener[type]=[];
  }
  this.listener[type].push(this.listener);
};

//触发指定类型的事件
Watch.prototype.emit=function(type,...reset){
  this.listener[type].forEach(item=>{
    item(...reset);
  });
};

// var w = new watch();

// w.on('success',(num)=>{
//   console.log(num);
// });

// w.emit('success',2000);

module.exports = Watch;