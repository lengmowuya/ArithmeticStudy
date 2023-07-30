// 2629. 复合函数
/* 
请你编写一个函数，它接收一个函数数组 [f1, f2, f3，…， fn] ，并返回一个新的函数 fn ，它是函数数组的 复合函数 。

[f(x)， g(x)， h(x)] 的 复合函数 为 fn(x) = f(g(h(x))) 。

一个空函数列表的 复合函数 是 恒等函数 f(x) = x 。

你可以假设数组中的每个函数接受一个整型参数作为输入，并返回一个整型作为输出。
*/
var compose = function(functions) {
	return function(x) {
        function execute(){
            if(functions.length){
                return functions.shift()(execute())
            }else{
                return x;
            }
        }
        return execute();
    }
};

console.log(compose([x => x + 1, x => x * x, x => 2 * x])(4));  // 65
console.log(compose([x => 10 * x, x => 10 * x, x => 10 * x])(1));  // 1000
console.log(compose([])(42));  // 42
console.log(compose([x => x + 1, x => 2 * x])(4))   // 9




