/* 
给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。

回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

例如，121 是回文，而 123 不是。
*/
var isPalindrome = function(x) {
    let str = x.toString();
    let arr = str.split('');
    // console.log(arr);
    if(arr.length<=1){return true};
    while(arr.length > 1){
        if(arr[0] === arr[arr.length-1]){
            arr.pop();
            arr.shift();
        }else{
            return false;
        }
    }
    return true;
};
console.log(isPalindrome(1));
console.log(isPalindrome(394593));
console.log(isPalindrome(22));
console.log(isPalindrome(101));
console.log(isPalindrome(1088801));
console.log(isPalindrome(1012909));