// 被大家群嘲的实现
// 1.实现这么简单的功能没必要这么复杂
// 2.你的栈为什么可以遍历?
// 3.你的栈为什么是插入栈底
function timeString(num){
    let time = num;
    let stack = [];
    while(time >= 60){
        let rem = time % 60;
        stack.unshift(rem);
        time = Math.floor(time / 60);
    }
    stack.unshift(time);
    while(stack.length<3){
        stack.unshift(0);
    }

    let norm = ['hour','min','sec'];
    let string =  stack.reduce((pre,now,i)=>{
        if(now){
            return pre + now + norm[i] + ' ';
        }
        return pre + '';
    },'')
    console.log(stack);
    return string;
}
console.log(timeString(7206));  // 2hour 6sec 
console.log(timeString(3650));  // 1hour 50sec
console.log(timeString(3600));  // 1hour
console.log(timeString(120));   // 2min