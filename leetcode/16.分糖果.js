// 575. 分糖果
//  思路,只能吃掉一半数量,那尽量每种吃一颗.
// 其实就是求最大糖种类数量和可吃数量哪个小
var distributeCandies = function(candyType) {
    // console.log('-------');
    let max = candyType.length / 2;
    let eatType = {};
    let typeLength = 0;
    let count = 0;
    while(count<candyType.length){
        if(!eatType[candyType[count]]){
            eatType[candyType[count]] = 1;
            typeLength+=1;
        }else{
            eatType[candyType[count]] ++;
        }
        count++;
        if(typeLength>=max){
            break;
        }
    }
    return typeLength < max ? length : max;
};

console.log(distributeCandies([1,1,2,2,3,3]));
console.log(distributeCandies([1,1,2,3]));
console.log(distributeCandies([6,6,6,6]));