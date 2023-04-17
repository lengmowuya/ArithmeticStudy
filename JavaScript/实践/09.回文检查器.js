// 需求:传入一个字符串,判断他是否是回文
// 方式1(最简单)：反转并判断与原字符串是否相等（基于API的偷懒实现）
// 方式2：用栈实现
// 方式2：用双端队列,是用数据结构的最简单方式

// 使用双端队列实现回文检查器的逻辑
// 将字符串存入双端队列,两边同时取出,如果两边取出的值不一致,则代表回文两边不一致,则确定该字符串不是回文.
// 如果能不断取出直到双端队列为空,或只剩下一个字符,则确定该字符串为回文.

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

function isEqual(string){
    let deque = new Deque();
    let isEqual = true;

    for(let i = 0;i<string.length;i++){
        deque.addBack(string.charAt(i));
    }
    while(deque.size() > 1){
        if(deque.removeBack() !== deque.removeFront()){
            isEqual = false;
            break;
        }
    }
    return isEqual;
}
console.log(isEqual('666'));    // true
console.log(isEqual('781'));    // false
console.log(isEqual('sfjwoejfo'));  // false
console.log(isEqual(''));  // true
console.log(isEqual(' '));  // true
console.log(isEqual('6'));  // true
console.log(isEqual('1234567654321'));  // true