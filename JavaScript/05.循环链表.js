// 循环链表可以单向引用,也可以双向引用.
// 循环链表的特质在于,最后一个元素指向下一个元素的指针(tail.next)不是undefined.而是指向第一个元素(head);
// 同时head.prev指向tail
const {DoublyNode,DoublyLinkedList} = require('./04.双向链表.js');

class CircularLinkedList extends DoublyLinkedList{
    constructor(){
        super();
    }
    push(element){
        let node = new DoublyNode(element);
        if(this.head == undefined){
            this.head = node;
            this.tail = node;
            node.next = node;
            node.prev = node;
        }else if(this.head == this.tail){
            this.tail.next = node;
            this.head.prev = node;
            node.next = this.head;
            node.prev = this.tail;
            this.tail = node;
        }else{
            this.tail.next = node;
            this.head.prev = node;
            node.next = this.head;
            node.prev = this.tail;
            this.tail = node;
        }
        this.count++;
    }
}

// 双向循环链表
console.log('-----双向循环链表-----');
let circularList = new CircularLinkedList();
circularList.push('阿布');
circularList.push('鱼翅');
circularList.push('乌鸦');
console.log(circularList.toString());