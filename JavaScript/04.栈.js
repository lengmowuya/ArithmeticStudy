// 终于来到栈了,栈作为数据结构的重点基础,必须掌握.
// 有两种类似于数组的数据结构在添加和删除元素时更为规范秩序和可控.它们就是栈和队列.

// 栈是一种遵循后进先出原则(LIFO)的有序集合
// 栈的常用场景:计算机语言的编译器,内存的方法调用,可回撤的历史记录等.


// 声明一个Stack类
class Stack1{
    constructor(){
        this.items = [];
    }
}
// 由于栈遵循LIFO原则,所以我们需要对元素的插入和删除功能进行限制.
// 我们要对栈声明一些能力
/* 
    push:添加一个或多个元素到栈顶
    pop:移除栈顶元素,同时返回被移除的元素
    peek:返回栈顶的元素,不对栈做任何修改
    isEmpty:返回栈是否为空
    clear:移除栈里的所有元素
    size:返回栈里的元素个数,与数组的length属性类似.
*/
class Stack2{
    constructor(){
        this.items = [];
    }
    push(element){
        this.items.push(element);
    }
    pop(){
        return this.items.pop();
    }
    // peek输出的栈顶是最后添加的元素,而不是最先添加的元素
    peek(){
        return this.items[this.items.length-1];
    }
    isEmpty(){
        return this.items.length === 0;
    }
    size(){
        return this.items.length;
    }
    clearn(){
        this.items = [];
    }
}
let stack = new Stack2();
console.log(stack.isEmpty());   // true
stack.push(5);
stack.push(8);
console.log(stack.peek());  // 8
stack.push(11);
console.log(stack.size())   // 3
stack.pop();
stack.pop();
console.log(stack.size());  // 1


// 使用数组时,大部分方法的时间复杂度是O(n);
// O(n)的意思是,我们需要迭代整个数组来找到指定的元素,最坏的情况下需要迭代数组的所有位置.

// 新增需求:保护数据结构内部元素
// 现在的内部元素全部为公开不受保护
console.log(stack.items); // [ 5 ]
console.log(stack.items[0]);    // 5

// 约定:下划线命名约定
// 部分开发者喜欢使用下划线命名来约定为内部私有属性,以求外部不会去改动
// 约定并不能保护数据,只能依赖于使用我们代码的开发者所具备的常识,且不具有强制作用.


// 解决方案:使用ES6新增的WeakMap类
// 有一种数据类型可以确保属性是私有的，这就是WeakMap.
const weak = new WeakMap();
class Stack3{
    constructor(){
        weak.set(this,[]);
    }
    push(element){
        let items = weak.get(this);
        items.push(element);
    }
    pop(){
        let items = weak.get(this);
        let element = items.pop();
        return element;
    }
}
let stack2 = new Stack3();
console.log(weak.get(stack2));
// 使用缺点:代码的可读性减弱,且扩展该类时无法继承私有属性.