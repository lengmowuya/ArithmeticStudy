// 13. 罗马数字转整数
// 给定罗马数字,输出整数
// 罗马数字经过排序.罗马数字包含以下七种字符: I， V， X， L，C，D 和 M。
/* 
I             1
V             5
X             10
L             50
C             100
D             500
M             1000 */

/* var romanToInt = function(str){
    let string = [];
    for(let i = 0;i<str.length;i++){
        string.push(str.charAt(i));
    }
    let numStack = string.map(item=>map[item]);
    let count = numStack.reduce((pre,now)=>pre+now);
    let reverseStack = numStack.reverse();
    let loseStack = [];
    let basic = 0;
    for(let i = 0;i<reverseStack.length;i++){
        if(reverseStack[i]<basic){
            loseStack.push(reverseStack[i]);
        }else{
            basic = reverseStack[i];
        }
    }
    let loseCount = loseStack.length && loseStack.reduce((pre,now)=>pre+now);
    return count - loseCount * 2;
} */
let map = {
    "I":1,
    "V":5,
    "X":10,
    "L":50,
    "C":100,
    "D":500,
    "M":1000
}
// console.log(romanToInt("MCMXCIV"));
// console.log(romanToInt("LVIII"));

// function getNum(char){
//     let map = [{I:1},]
// }

// 分析
// 罗马数字的单元遵循从大到小的排序.可以使用reduce排序
// 但是如果一个较小的罗马数字放在较大的罗马数字右边,代表是较大罗马数字的负值.

// 方案:从大到小累加一次,然后反向查找负值,把负值乘2即可.


// 大幅优化写法
var romanToInt = function(str){
    let string = [];
    for(let i = 0;i<str.length;i++){
        string.unshift(str.charAt(i));
    }
    let count = 0;
    let basic = 0;
    for(let i = 0;i<string.length;i++){
        let num = map[string[i]];
        if(num<basic){
            count -= num;
        }else{
            basic = num;
            count+=num;
        }
    }
    return count;
}

console.log(romanToInt("LVIII"));   // 58
console.log(romanToInt("MCMXCIV")); // 1994
