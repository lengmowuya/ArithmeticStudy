// 许多使用递归去解决的编程问题,可以重写为使用动态规划的技巧去解决.

/* 
    动态规划方案通常会使用一个数组来建立一张表,用于存放被分解成众多子问题的解.
    当算法执行完毕,最终的解释将会在这个表中很明显的地方被找到.
*/
function dynFib(n){
    let val = [];
    for(let i = 0; i <= n; ++i){
        val[i] = 0;
    }
    if(n == 1 || n == 2){
        return 1;
    }else{
        val[1] = 1;
        val[2] = 2;
        for(let i = 3; i <= n; ++i){
            val[i] = val[i-1] + val[i-2];
        }
        return val[n-1];
    }
}
console.log(dynFib(90));