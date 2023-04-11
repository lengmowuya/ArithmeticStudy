let arr1 = ['1',5,1,34,14,1,"冷漠"];
let arr2 = ['冷漠','寂寞',999,'abc',1,2,3,4,5,6];

let arr3 = [...arr1,...arr2];
let arr4 = [];
// 其实在JS中有很多方式可以语义化的合并数组且去重,但是为了学习我们自行合并
for(let i = 0;i<arr3.length;i++){
    let isExist = false;
    for(let j =0;j<arr4.length;j++){
        // 如果已经存在,就不添加这个元素
        if(arr4[j]==arr3[i]){
            isExist = true;
            break;
        }
    }
    if(isExist) continue;
    arr4.push(arr3[i]);
}
console.log(arr4);