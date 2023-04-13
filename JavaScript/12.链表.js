// 链表不同于数组,在内存中并不是连续放置
// 链表添加和删除元素的时候不需要移动其他元素,但是访问链表需要指针.

/* 
    push(element)   链表尾部添加元素
    insert(element,position)    向链表特定位置插入一个元素
    getElementAt(index)   返回链表中特定位置的元素.
    remove(element)   从链表中移除一个元素
    indexOf(element)    返回元素在链表中的索引,没有则返回-1
    isEmpty()   链表中是否含有元素
    removeAt(position)  从链表的特定位置移除一个元素.
    size()  链表元素个数
    toString()  返回整个链表的字符串
*/
class Node{
    constructor(element){
        this.element = element;
        this.next = undefined;
    }
}
class LinkedList{
    constructor(){
        this.count = 0;
        this.head = undefined;
        this.equalsFn = (a,b)=>{
            return a === b;
        };
    }
    push(element){
        // 可能存在情况:链表为空和链表不为空
        let node = new Node(element);
        let current;
        if(this.head == undefined){
            this.head = node;
        }else{
            // 顺着链表一直找链表底部
            current = this.head;
            while(current.next != undefined){
                current = current.next;
            }
            current.next = node;
        }
    this.count++;
    }
    removeAt(index){
        if(index >= 0 && index < this.count){
            let current = this.head;
            if(index === 0){
                this.head = current.next;
            }else{
                let previous = this.getElementAt(index-1);
                current = previous.next;
                previous.next = current.next;
            }
            this.count --;
            return current.element;
        }
        return undefined;
    }
    getElementAt(index){
        if(index >= 0 && index < this.count){
            let node = this.head;
            for(let i = 0; i < index && node != undefined;i++){
                node = node.next;
            }
            return node;
        }
        return undefined;
    }
    insert(element,index){
        if(index >= 0 && index <= this.count){
            const node = new Node(element);
            if(index === 0){
                const current = this.head;
                node.next = current;
                this.head = node;
            }else{
                const previous = this.getElementAt(index-1);
                const current = previous.next;
                node.next = current;
                previous.next = node;
            }
            this.count++;
            return true;
        }
        return false;
    }
    indexOf(element){
        let current = this.head;
        for(let i = 0; i < this.count && current != undefined; i++){
            if(this.equalsFn(element,current.element)){
                return i;
            }
            current = current.next;
        }
        return -1;
    }
    remove(element){
        const index = this.indexOf(element);
        return this.removeAt(index);
    }
    size(){
        return this.count;
    }
    isEmpty(){
        return this.size() === 0;
    }
    toString(){
        if(this.head == null) return '';
        let objString = `${this.head.element}`;
        let current = this.head.next;
        for(let i = 1; i < this.size() && current != undefined; i++){
            objString = `${objString},${current.element}`;
            current = current.next;
        }
        return objString;
    }
}
let linkList = new LinkedList();
linkList.push('阿布');
linkList.push('罗佬');
linkList.push('乌鸦');
linkList.push('five');
console.log(linkList.toString());
console.log(linkList.removeAt(0));
console.log(linkList.removeAt(0));