// 50. Pow(x, n) 计算一个数的n次幂值
// var myPow = function(x, n) {
//     let powFn = (x,x)=>{
//         if(n === 0) return 1;
//         if(n < 0) return powFn()
//     }
// };

var myPow = function(base,n){
    console.log('-----');
    let powFn = (num,pow)=>{
        if(pow === 0) return 1;
        else if (pow<0) return powFn(1/num,-pow);
        
        let cur = powFn(num,Math.floor(pow/2));
        console.log(num,pow,cur);
        return cur * cur * (pow % 2 === 0 ? 1 : base);
    }
    return powFn(base,n);
}


console.log(myPow(2,2));
console.log(myPow(2,3));
console.log(myPow(2,-2));
console.log(myPow(0.44528,0));