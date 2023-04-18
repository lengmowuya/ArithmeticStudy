// 面试题 02.05. 链表求和
function ListNode(val) {
    this.val = val;
    this.next = null;
}

// 简单粗暴写法,但是无法通过,因为如果数字位数够多,能直接爆掉你的整数最大值.
var addTwoNumbers = function(l1, l2) {
    let num1 = '';
    let num2 = '';
    let node = l1;
    while(node != undefined){
        num1 += node.val;
        node = node.next;
    }
    node = l2;
    while(node != undefined){
        num2 += node.val;
        node = node.next;
    }
    num1 = Number(num1.split('').reverse().join(''));
    num2 = Number(num2.split('').reverse().join(''));
    let sum = num1 + num2;
    sum = sum.toString().split('').reverse();
    let head = new ListNode(sum[0]);
    let current = head;
    for(let i = 1;i < sum.length && sum[i] != undefined; i++){
        current.next = new ListNode(sum[i]);
        current = current.next;
    }
    return head;
};
let l1 = {val:7,next:{val:1,next:{val:6}}};
let l2 = {val:5,next:{val:9,next:{val:2}}};
console.log(addTwoNumbers(l1,l2));