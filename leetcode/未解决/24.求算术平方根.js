// 69. x 的平方根
/* 
给你一个非负整数 x ，计算并返回 x 的 算术平方根 。

由于返回类型是整数，结果只保留 整数部分 ，小数部分将被 舍去 。

注意：不允许使用任何内置指数函数和算符，例如 pow(x, 0.5) 或者 x ** 0.5 。
*/
var mySqrt = function(x) {
    if(x === 1) return 1;
    if(x === 0) return 0;
    let left = 1, right = x / 2;
    while(left<=right){
        // 计算中间值
        middle=Math.floor((left+right)/2);
        // 如果中间值的平方等于x，则为答案直接返回
        if(middle*middle==x)return middle;
        // 如果中间值的平方大于x,证明[middle,right]区间
        // 的平方都是大于x的，因此舍去该区间，并重置为
        // [left,middle-1]
        else if(middle*middle>x)right=middle-1
        // 如果中间值的平方小于x,证明[left,middle]区间
        // 的平方都是小于x的，因此舍去该区间，并重置为
        // [middle+1,right]
        else left=middle+1
    }
    // 当遍历完成都未找到平方与x相等的答案，
    // 此时返回left-1即可
    return left-1;
};
console.log(mySqrt(8));
console.log(mySqrt(5));
console.log(mySqrt(398));