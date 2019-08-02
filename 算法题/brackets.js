//左括号匹配对应的右括号，输出每一对括号
const str = '2 + ((4 + 6) * 8 + (1 + 2))'; 


function parse(str) {  
  const lefts = []; //左括号的索引
  const success = []; //匹配成功的数据

  //遍历字符串
  for(let i=0; i<str.length; i++){
    if(str[i]==='('){
      lefts.push(i);
    }
    else if(str[i]===')'){
      if(lefts.length===0){
        throw new Error(`位置在${i}的)非法`);
      }
      success.push({
        left:lefts.pop(),
        right:i
      });
    }
  }
  //监测lefts的长度是否为0
  if(lefts.length!==0){
    throw new Error(`位置在${lefts[0]}的(非法`);
  }
  return success;
}

parse(str);