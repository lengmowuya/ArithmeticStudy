// 队列与栈非常类似,不过采用先进先出(FIFO)的原则,与现实排队类似,先排队的人先取餐.
// 应用场景:如待播放的歌曲列表,待打印的列表名单等.
// 实现数据结构时,虽然数组最为简单直接,但是为了实现获取元素时的高效,通常都会使用对象来存储元素.
// 不过这里我们仅仅是实现队列Queue,不需要搜索,所以大可不必使用对象存储.

// 队列需要的属性及方法
/* 
    enqueue:向队列尾部添加一个或多个元素,
    dequeue:移除队列的第一个元素(即最先放入的元素),并返回被移除的元素.
    peek:同栈,返回队列里的第一个元素.
    isEmpty:同栈,返回队列是否为空
    size:同栈,返回队列内的元素数量.
*/
class Queue1{
    constructor(){
        this.items = [];
    }
    enqueue(element){
        this.items.push(element);
    }
    dequeue(){
        return this.items.shift();
    }
    peek(){
        return this.items[this.items.length-1]
    }
    isEmpty(){
        return this.items.length <= 0;
    }
    size(){
        return this.items.length;
    }
}
let queue = new Queue1();
queue.enqueue(7);
queue.enqueue(3);
queue.enqueue(5);
queue.enqueue(2);
queue.dequeue();
console.log((queue.items)); // [ 3, 5, 2 ]



// 双端队列是一种将队列和栈的原则混合的数据结构.