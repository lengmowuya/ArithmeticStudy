// 70. 爬楼梯,给n级台阶,每次只能走1或2级,有多少种走法走完.
// 1.使用斐波那契,快速计算
/* var climbStairs = function(n) {
    let one = 1;
    let two = 2;
    let count = 2;
    while(count < n){
        let sum = one + two;
        one = two;
        two = sum;
        count++;
    }
    return n<3 ? [1,2][n-1] : two;
} */


// 缓存递归斐波那契数列
// let cache = [];
var climbStairs = (n)=>{
    const fib = (n,cache)=>{
        if(cache[n]) return cache[n];
        const result = n<3 ? [1,2][n-1] : fib(n-1,cache) + fib(n-2,cache);
        cache[n] = result;
        return result;
    }
    return fib(n,[])
}
console.log(climbStairs(6,[]));