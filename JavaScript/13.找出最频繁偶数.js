// 2404. 出现最频繁的偶数元素

var mostFrequentEven = function(nums) {
    let even = nums.filter(num=>num%2===0);
    console.log(even);
    // 统计次数
    let fre = even.reduce((pre,num)=>{
        let index = pre.findIndex(item=>{return item.val === num});
        if(index === -1){
            pre.push({val:num,count:1});
        }else{
            pre[index].count++;
        }
        return pre;
    },[]);
    // 为次数排序
    fre = fre.sort((a,b)=>{
        let bool = b.count - a.count;
        // 次数一样,则小的在前面
        if(b.count - a.count === 0){
            bool = a.val - b.val;
        }
        return bool;
    });
    return fre.length ? fre[0].val : -1;
};

console.log(mostFrequentEven([0,1,2,2,4,4,1]));
