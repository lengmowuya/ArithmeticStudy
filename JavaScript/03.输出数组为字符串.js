// 要求:将一整个数组合并为一个字符串输出
// 直接使用.toString方法
let arr = [1,2,3,4,5,6,7,8,9,0];
console.log(arr.toString());    // 1,2,3,4,5,6,7,8,9,0

// 如果想要使用不同的分隔符
console.log(arr.join('-')); // 1-2-3-4-5-6-7-8-9-0
// 不想使用分隔符
console.log(arr.join(''));  // 1234567890