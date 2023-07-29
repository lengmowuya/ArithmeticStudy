// 链表循环
/* 
给你一个链表的头节点 head ，判断链表中是否有环。

如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。注意：pos 不作为参数进行传递 。仅仅是为了标识链表的实际情况。

如果链表中存在环 ，则返回 true 。 否则，返回 false 。

// 方法1:在node上动态记录值,不是所有语言通用.
*/
// var hasCycle = function(head) {
//     // console.log(head.val);
//     let result = head;
//     while(result != null && result != undefined){
//         // 如果遍历过
//         if(result.i){
//             return true;
//         }else{
//             result.i = true;
//             result = result.next;
//         }
//     }
//     return false;
// };

// 方法2:使用快慢指针碰撞
var hasCycle = function(head) {
    let fast = head;
    let slow = head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
        if(slow == fast){
            return true;
        }
    }
    return false;
};
