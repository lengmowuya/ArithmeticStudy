// 有序链表是指保持元素有序的链表结构.
// const Compare
let {LinkedList} = require('./03.链表.js');
// function d

// 默认比较方法,可自定义
function defaultCompare(a,b){
    if(a === b){
        return 0;
    }
    return a < b ? -1 : 1;
}
class SortedLinkedList extends LinkedList{
    constructor(compareFn = defaultCompare){
        super();
        this.compareFn = compareFn;
    }
    insert(element,index = 0){
        if(this.isEmpty()){
            return super.insert(element,0);
        }
        const pos = this.getIndexNextSortedElement(element);
        return super.insert(element,pos);
    }
    getIndexNextSortedElement(element){
        let current = this.head;
        let i = 0;
        for(;i < this.size() && current; i++){
            const comp = this.compareFn(element,current.element);
            if(comp === -1){
                return i;
            }
            current = current.next;
        }
        return i;
    }
}

console.log('------有序链表------');

let sortList1 = new SortedLinkedList();
// 自动排序
sortList1.insert(1);
sortList1.insert(999);
sortList1.insert(4455);
sortList1.insert(123);
sortList1.insert(2);
sortList1.insert(5555);
console.log(sortList1.toString());


let sortList2 = new SortedLinkedList((a,b)=>{
    return b.age - a.age;
});
// 自动排序
sortList2.insert({age:24,name:'老罗'});
sortList2.insert({age:20,name:'乌鸦'});
sortList2.insert({age:25,name:'阿布'});
console.log(sortList2.head);