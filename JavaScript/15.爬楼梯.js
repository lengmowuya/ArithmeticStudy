var climbStairs = function(n) {
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
}
console.log(climbStairs(5));