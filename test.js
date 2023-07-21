// 只修改这一行下面的代码
function urlSlug(title) {
  let newStr = title.toLowerCase();
  // newStr = newStr.trim().split(' ');
  newStr = newStr.split('');
  let arr = [];
  let count = 0;
  let prev;
  newStr = newStr.forEach(item=>{
    if(item == ' '){
      // 开头
      if(prev == undefined || prev == ' '){
        return;
      }else{
        count++;
      }
    }
    if(arr[count] == undefined){
      arr[count]= '';
    }
    arr[count] += item;
  })
  console.log(arr);
  newStr = arr.join('-');
  // console.log(arr);
  // console.log(newStr);
  // newStr = newStr.join('-');
  return newStr;
}
// 只修改这一行上面的代码
urlSlug(" Winter Is  Coming");