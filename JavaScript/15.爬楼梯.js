var climbStairs = function(n) {
    // let pre = [1,2];
    // let count = 2;
    // while(count < n){
    //     pre.push(pre[0] + pre[1]);
    //     pre.shift();
    //     count++;
    // }
    const stair = (pre,now) => {
        return n<3 ? [1,2][n-1] : stair();
    }
    return n<3 ? [1,2][n-1] : stair();
}
console.log(climbStairs(5));