// 2177. 找到和为给定整数的三个连续整数
// 思路,求平均数
var sumOfThree = function(num) {
    if(num % 3 !== 0)  return [];
    let base = num / 3;
    return [base-1,base,base+1];
};
console.log(sumOfThree(33));
console.log(sumOfThree(4));