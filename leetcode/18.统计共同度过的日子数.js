// 2409.统计共同度过的日子数
let map = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const dateToObj = (string)=>{
    let split = string.split('-');
    return {month:Number(split[0]),day:Number(split[1])};
}
var countDaysTogether = function(arriveAlice, leaveAlice, arriveBob, leaveBob) {
    for(let i =0 ; i < arguments.length; i++){
        arguments[i] = dateToObj(arguments[i]);
    }
    // 没有并集判断
    let start;
    let end;
    if(arriveAlice.month == leaveBob.month){
        if(arriveAlice.day > leaveBob.day){
            return 0;
        }
    }else if(arriveAlice.month > leaveBob.month){
        return 0;
    }

    if(arriveBob.month == leaveAlice.month){
        if(arriveBob.day > leaveAlice.day){
            return 0;
        }
    }else if(arriveBob.month > leaveAlice.month){
        return 0;
    }

    

    // 设置到达时间为大的
    if(arriveAlice.month == arriveBob.month){
        if(arriveAlice.day >= arriveBob.day){
            start = arriveAlice;
        }else{
            start = arriveBob;
        }
    }else{
        start = arriveAlice.month > arriveBob.month ? arriveAlice : arriveBob;
    }
    // 设置离开时间为小的
    if(leaveAlice.month == leaveBob.month){
        if(leaveAlice.day >= leaveBob.day){
            end = leaveBob;
        }else{
            end = leaveAlice;
        }
    }else{
        end = leaveAlice.month < leaveBob.month ? leaveAlice : leaveBob;
    }
    let days = 0;
    // 增加月差的天数
    if(end.month > start.month){
        while(start.month < end.month){
            days += map[start.month-1];
            start.month++;
        }
    }
    days += end.day - start.day + 1;
    return days;
};
console.log(countDaysTogether("08-15", "08-18", "08-16","08-19"));
// console.log(countDaysTogether("10-01","10-31", "11-01","12-31"));
console.log(countDaysTogether("09-01","10-19", "06-19","10-20"));
console.log(countDaysTogether("08-06","12-08", "02-04","09-01"));
console.log(countDaysTogether("05-20","07-01", "07-29","10-18"));
console.log(countDaysTogether("09-01","10-19", "06-19","10-20"));