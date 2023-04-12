// 需求:模拟击鼓传花
// 使用循环队列
// 击鼓传花的规则就是不断迭代人列,当第一个人把花传给下一个人的时候,原本的第一个人应该变成最后一个人(为了有顺序的迭代);
// 所以我们默认把循环队列里的第一个人作为拿着花的人,当他成功传递花后,就把它移到最后,后续的元素自然接任它作为拿花的人.
class Deque{
    constructor(list){
        this.items = list || [];
    }
    addFront(...element){
        this.items.unshift(...element);
    }
    addBack(...element){
        this.items.push(...element);
    }
    removeFront(){
        return this.items.shift();
    }
    removeBack(){
        return this.items.pop();
    }
    peekFront(){
        return this.items[0];
    }
    peekBack(){
        return this.items[this.items.length - 1];
    }
    size(){
        return this.items.length;
    }
}

let list = new Deque(['阿布','罗佬','Five']);
console.log(list.items);    // [ '阿布', '罗佬', 'Five' ]
list.addBack('绒球','喵喵',' 满天星');
console.log(list.items);    // [ '阿布', '罗佬', 'Five', '绒球', '喵喵', ' 满天星' ]

function delivery(list){
    let deque = new Deque(list);
    while(deque.size() > 1){
        // 不知道击鼓传花什么时候会停下
        for(let i = 0;i<randomInt(0,deque.size());i++){
            // 删除头部,并把删除掉的头部元素添加到尾部
            deque.addBack(deque.removeFront());
        }
        deque.removeFront();
    }
    console.log(deque.items);
    return deque.peekFront();
}
let result = delivery(['阿布','罗佬','Five','绒球','喵喵',' 满天星','乌鸦','兔子','橘子']);
console.log(result);

function randomInt(min,max){
    return Math.floor(Math.random()*(max+1-min)+min);
}