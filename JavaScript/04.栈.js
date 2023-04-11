// 终于来到栈了,栈作为数据结构的重点基础,必须掌握.
// 有两种类似于数组的数据结构在添加和删除元素时更为规范秩序和可控.它们就是栈和队列.

// 栈是一种遵循后进先出原则(LIFO)的有序集合
// 栈的常用场景:计算机语言的编译器,内存的方法调用,可回撤的历史记录等.


// 声明一个Stack类
class Stack{
    constructor(){
        this.items = [];
    }
}
// 由于栈遵循LIFO原则,所以我们需要对元素的插入和删除功能进行限制.
// 我们要对栈声明一些能力
/*  */