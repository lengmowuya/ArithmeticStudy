// leetcode 103.最少的硬币数目
function coinChange(coin,amo){
    let coins = coin.sort((a,b)=>b-a);
    console.log('------');
    console.log(coins,amo);
    let amount = amo;
    let consult = 0;
    for(let i = 0;i<coins.length;i++){
        if(amount < coins[i]) continue;
        if(amount <= 0) continue;
        consult += parseInt(amount / coins[i]);
        amount = amount % coins[i];
        console.log(amount);
    }
    if(amount > 0){
        // 如果面额未被整除,且数组还可以截取
        if(coins.length>1){
            coins.shift();
            let result = coinChange(coins,amo);
            if(result == -1){
                return -1;
            }else{
                return result;
            }
        }else{
            // 到底了
            return -1;
        }

    }else{
        return consult;
    }
}
// console.log(coinChange([1,2,5],11));
// console.log(coinChange([2],3));
// console.log(coinChange([3,5],9));
// console.log(coinChange([1],1));
// console.log(coinChange([1],2));

console.log(coinChange([186,419,83,408],6249));
