// JS对搜索提供了两个方法,indexOf和lastIndexOf
// indexOf方法搜索指定值并返回搜索到的值的下标,没搜索到则返回-1
// lastIndexOf与indexOf相反为倒序搜索,即从后向前搜索.
let arr = [1,2,3,4,5,6,7,8,9,0];

console.log(arr.indexOf(4));    // 3
console.log(arr.lastIndexOf(4));    // 3
arr.push(4);
console.log(arr.lastIndexOf(4));    // 10


// ES6额外提供了两个方法find和findIndex
let arr2 = arr.map(item=>{return{'name':item}});
console.log(arr2);
/* [
    { name: 1 }, { name: 2 },
    { name: 3 }, { name: 4 },
    { name: 5 }, { name: 6 },
    { name: 7 }, { name: 8 },
    { name: 9 }, { name: 0 },
    { name: 4 }
  ] */

// find方法
// find方法会返回搜索到数组元素,没有搜索到会返回undefined
// 使用场景:拿到数组中满足指定条件的元素
let result = arr2.find(item=>item.name==3);
console.log(result);    // { name: 3 }

// findIndex
// findIndex方法会返回搜索到数组元素下标,没有搜索到会返回-1
// 使用场景:知道数组中满足指定条件的元素的下标
let index = arr2.findIndex(item=>item.name==3);
console.log(index);    // 2

// ES7标注又新增了一个方法,includes方法
// 如果数组中存在指定元素,则返回true,不存在则返回false
// 使用场景:查看数组中是否包含指定元素
console.log(arr.includes(1));   // true
console.log(arr.includes(16));  // false
// 如果给includes传入一个起始下标,搜索会从下标的位置开始向后找
console.log(arr.includes(1,1)); // false