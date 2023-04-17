// 需求:将十进制整数转化为二进制整数
// 要把十进制整数转化为二进制,需要不断对值除以2(二进制是满2进1),并对商取整,直到结果不可再整除2为止.

class Stack{
    constructor(){
        this.items = []
    }
    push(element){
        this.items.push(element);
    }
    pop(){
        return this.items.pop();
    }
    peek(){
        return this.items[this.item.length-1];
    }
    size(){
        return this.items.length;
    }
    isEmpty(){
        return this.items.length<=0;
    }
    clean(){
        this.items = [];
    }
}

// 转化为2进制
function toBin(val){
    let stack = new Stack();
    let num = val;
    let rem;
    while(num>0){
        rem = Math.floor(num % 2);
        stack.push(rem);
        num = Math.floor(num / 2);
    }
    let string = '';
    while(!stack.isEmpty()){
        string += stack.pop();
    }
    return string;
}
console.log(toBin(215));    // 11010111

// 同理尝试8进制
function toOct(val){
    let stack = new Stack();
    let num = val;
    let rem;
    while(num>0){
        rem = Math.floor(num % 8);
        stack.push(rem);
        num = Math.floor(num / 8);
    }
    let string = '';
    while(!stack.isEmpty()){
        string += stack.pop();
    }
    return string;
}
console.log(toOct(215));    // 327