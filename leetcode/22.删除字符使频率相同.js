var equalFrequency = function(word) {
    let count = {};
    for(let i = 0; i < word.length;i++){
        let char = word[i];
        if(count[char] == undefined){
            count[char] = 1;
        }else{
            count[char] ++;
        }
    }
    let prev = undefined;
    let reduce = 0;
    let allOne = true;
    let arr = [];
    for(let char in count){
        arr.push(count[char]);
    }
    arr.sort((a,b)=>b-a)
    // console.log(arr);
    arr.forEach(num=>{
        if(num != 1) allOne = false;
        if(prev && num != prev){
            // console.log(prev,num);
            reduce += Math.abs(prev - num);
        }
        // 跳出判断
        prev = num;
    })
    // console.log(reduce);
    if(reduce >= 2) return false;
    if(!allOne && reduce == 0) return false;
    return true;
};
// false
console.log(equalFrequency('abccc'));
console.log(equalFrequency('aazz')); // 0
console.log(equalFrequency('ddaccb')); // 1
// true
console.log(equalFrequency('abc')); // 0
console.log(equalFrequency('abcc')); // 1
console.log(equalFrequency('aca')); // 1
console.log(equalFrequency('cbbd')); // 1