/* 
对BST通常有下列三种类型的查找:
1.查找给定值
2.查找最小值
3.查找最大值
*/
// let {Node,BST}  = require('./12.二叉树基本.js')

class Node{
    constructor(data,left=null,right=null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
    show = ()=>{
        return this.data;
    }
}
class BST{
    constructor(){
        this.root = null;
    }
    insert(data){
        let n = new Node(data);
        if(this.root == null){
            this.root = n;
        }else{
            let current = this.root;
            let parent;
            while(true){
                parent = current;
                if(data < current.data){
                    current = current.left;
                    if(current == null){
                        parent.left = n;
                        break;
                    }
                }else{
                    current = current.right;
                    if(current == null){
                        parent.right = n;
                        break;
                    }
                }
            }
        }
    }
    // 先序遍历
    inOrder(node = this.root){
        let str = '';
        if(!(node==null)){
            str += this.inOrder(node.left);
            str += node.show()+" ";
            str += this.inOrder(node.right);
        }
        return str;
    }
    // 中序遍历
    preOrder(node = this.root){
        let str = '';
        if(!(node==null)){
            str+=node.show()+' ';
            str+=this.preOrder(node.left);
            str+=this.preOrder(node.right);
        }
        return str;
    }
    // 后序遍历
    postOrder(node = this.root){
        let str = '';
        if(!(node==null)){
            str+=this.postOrder(node.left);
            str+=this.postOrder(node.right);
            str+=node.show()+' ';
        }
        return str;
    }
    getMin(){
        let current = this.root;
        while(!(current.left==null)){
            current = current.left;
        }
        return current.data;
    }
    getMax(){
        let current = this.root;
        while(!(current.right == null)){
            current = current.right;
        }
        return current.data;
    }
    // 在BST上查找给定值,需要比较该值和当前节点上的值的大小.通过比较,就能确定如果给定值不在当前节点时,是改向左遍历还是向右遍历.
    find(data){
        let current = this.root;
        while(current != null){
            if(current.data==data){
                return current;
            }else if(data<current.data){
                current = current.left;
            }else{
                current = current.right;
            }
        }
        return null;
    }
    // BST最复杂的操作在于删除节点,其复杂程度取决于删除哪个节点.删除包含两个子节点的节点最复杂.
    // 为了管理删除操作的复杂度,我们使用递归操作.
    remove(data){
        root = removeNode(this.root,data);
    }
    removeNode(node,data){
        if(node == null){
            return null;
        }
        if(data == node.data){
            if(node.left == null & node.right == null){
                return null;
            }
            if(node.left == null){
                return node.right;
            }
            if(node.right == null){
                return node.left;
            }
            let tempNode = getSmall-est(node.right);
            node.data = tempNode.data;
            node.right = removeNode(node.right,tempNode.data);
            return node;
        }else if(data < node.data){
            node.left = removeNode(node.left,data);
            return node;
        }else{
            node.right = removeNode(node.right,data);
            return node;
        }
    }
}

let tree = new BST();
tree.insert(99182);
tree.insert(23);
tree.insert(66);
tree.insert(1);
tree.insert(8);
tree.insert(37);
tree.insert(99);
tree.insert(177);
console.log(tree.inOrder());
console.log(tree.getMin());
console.log(tree.getMax());
console.log(tree.find(5));
// console.log(tree.find(66));
