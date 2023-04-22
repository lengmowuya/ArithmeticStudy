// 树是一种非线性的数据结构,以分层的方式存储数据.树被用来存储具有层级关系的数据,比我文件系统中的文件;树海被用来存储有序列表.
// 在二叉树在进行查找非常快(而在链表上查找则不快),为二叉树添加或删除元素也非常快(而对数组执行添加或删除操作则没有这么快).




// 实现二叉查找树
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
    inOrder(node){
        let str = '';
        if(!(node==null)){
            str += this.inOrder(node.left);
            str += node.show()+" ";
            str += this.inOrder(node.right);
        }
        return str;
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
console.log(tree.inOrder(tree.root));
