// 树是一种非顺序数据结构,它对于需要快速查找的数据非常有用.
/* 
    顶部的叫做根节点
    节点的深度取决于它到根节点数量.
    树的高度是最大节点深度的值.
*/
/* 
二叉树
二叉树每个节点都只能有两个子节点:一个左侧,一个右侧
二叉树在计算机科学中的应用十分广泛.

二叉搜索树(BST)是二叉树的一种,但是只允许你在左侧节点存储比节点小的值,在右侧存储比节点大的值.
*/
class Node{
    constructor(key){
        this.key = key;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree{
    constructor(compareFn = defaultCompare){
        this.compareFn = compareFn;
        this.root = null;
    }
    insert(key){
        if(this.root == null){
            this.root = new Node(key);
        }else{
            this.insertNode(this.root,key);
        }
    }
    insertNode(node,key){
        if(this.compareFn(key,node.key) === -1){
            if(node.left == null){
                node.left = new Node(key);
            }else{
                this.insertNode(node.left,key);
            }
        }else{
            if(node.right == null){
                node.right = new Node(key);
            }else{
                this.insertNode(node.right,key);
            }
        }
    }
    inOrderTraverse(callback){
        this.inOrderTraverseNode(this.root,callback);
    }
    inOrderTraverseNode(node,callback){
        if(node != null){
            this.inOrderTraverseNode(node.left,callback);
            callback(node.key);
            this.inOrderTraverseNode(node.right,callback);
        }
    }
}
const tree = new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);

/* 
树的遍历
访问树的所有节点有三种方式:中序,先序和后序.
*/
// 中序遍历是一种以上行顺序访问BST所有节点的遍历方式,也就是以从最小到最大的顺序访问所有节点.

const printNode = (value)=>console.log(value);
tree.inOrderTraverse(printNode);
