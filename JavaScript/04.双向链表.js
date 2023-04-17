// 链表的类型有很多
// 双向链表中,链接是双向的,相邻的节点可互相指向.
let {Node,LinkedList} = require( './03.链表.js');

class DoublyNode extends Node{
    constructor(element,next,prev){
        super(element);
        this.next = next;
        this.prev = prev;
    }
}
class DoublyLinkedList extends LinkedList {
    constructor(){
        super();
        this.tail = undefined;
    }
    push(element){
        // let current = element;
        let node = new DoublyNode(element);
        let current;
        if(this.head === undefined){
            this.head = node;
            this.tail = node;
        }else{
            current = this.head;
            while(current.next != undefined){
                current = current.next;
            }
            current.next = node;
            node.prev = current;
            node.next = undefined;
            this.tail = node;
        }
        this.count++;
    }
    // 重写insert,因为双向链表的节点要同时控制next和prev
    insert(element,index){
        if(index < 0 || index > this.count) return;
        const node = new DoublyNode(element);
        let current = this.head;
        if(index === 0){
            if(this.head == null){
                this.head = node;
                this.tail = node;
            } else {
                node.next = this.head;
                current.prev = node;
                this.head = node;
            }
        } else if (index === this.count){
            current = this.tail;
            current.next = node;
            node.prev = current;
            this.tail = node;
        } else {
            const previous = this.getElementAt(index - 1);
            current = previous.next;
            node.next = current;
            previous.next = node;
            current.prev = node;
            node.prev = previous;
        }
    }
    // 双向链表移除元素与原本基本一致,唯一区别是需要前一个节点的指针
    removeAt(index){
        // console.log(this.count);
        if(index < 0 || index > this.count-1) return undefined;
        let current = this.head;
        // 三种场景:头部,中间和尾部移除元素
        if(index === 0){
            this.head = current.next;
            if(this.count === 1){
                this.tail = undefined;
            }else{
                this.head.prev = undefined;
            }
        }else if(index === this.count -1){
            current = this.tail;
            this.tail = current.prev;
            this.tail.next = undefined;
        }else{
            console.log(current);
            current = this.getElementAt(index);
            const previous = current.prev;
            previous.next = current.next;
            current.next.prev = previous;
        }
        this.count --;
        return current.element;
    }
}
// 双向链表提供两种迭代方式:从头到尾,从尾到头.

console.log('-----双向链表-----');
let douleList = new DoublyLinkedList();
douleList.push('阿布');
douleList.push('罗佬');
douleList.push('乌鸦');
douleList.push('five');
console.log(douleList.toString());
console.log(douleList.removeAt(0));
console.log(douleList.removeAt(3));
console.log(douleList.removeAt(2));

module.exports = {DoublyNode,DoublyLinkedList};