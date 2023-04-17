// 集合运算非常常用,在计算机领域中非常重要
/* 
    并集:返回两个集合中所有元素的集合
    交集:返回两个集合中共有元素的集合
    差集:返回A集合中存在,但B集合中不存在的元素集合
    子集:验证一个给定集合是否是另一集合的子集
*/
const {Set} = require('./07.简易集合自实现');
class HighSet extends Set{
    constructor(){
        super();
    }
    // 并集
    // 没有副作用的函数被称为纯函数.纯函数不会修改当前的实例或任何参数,只会生成一个新的结果并返回.
    // 这是函数式编程中非常重要的概念.
    union(otherSet){
        const unionSet = new Set();
        this.values().forEach(value => unionSet.add(value));
        otherSet.values().forEach(value => unionSet.add(value));
        return unionSet;
    }
    // 交集
    intersection(otherSet){
        const intersectionSet = new Set();
        const values = this.values();
        for(let i = 0; i < values.length; i++){
            if(otherSet.has(values[i])){
                intersectionSet.add(values[i]);
            }
        }
        return intersectionSet;
    }
    // 差集
    difference(otherSet){
        const differenceSet = new Set();
        this.values().forEach(value => {
            if(!otherSet.has(value)){
                differenceSet.add(value);
            }
        });
        return differenceSet;
    }
    // 子集 
    // 注意点:是判断this是否是目标的子集
    isSubsetOf(otherSet){
        if(this.size() > otherSet.size()) return false;
        let isSubset = true;
        // 子集需要每一个元素都存在大集合,所以用every判断每一个元素,如果有一个元素不存在就返回false结束迭代.
        this.values().every(value => {
            if(! otherSet.has(value)){
                isSubset = false;
                return false;
            }
            return true;
        });
        return isSubset;
    }
}

console.log('-----集合运算-----');

let set1 = new HighSet();
let set2 = new HighSet();
set1.add(1);
set1.add(2);
set1.add(3);
set1.add(8);
set1.add(999);

set2.add('99');
set2.add(999);
set2.add(8);
set2.add('$$$');
set2.add('!');
console.log(set1.union(set2).values());
console.log(set1.intersection(set2).values());  // [ 8, 999 ]
console.log(set1.difference(set2).values());  // [ 1, 2, 3 ]

let set3 = new HighSet();
console.log(set3.isSubsetOf(set1)); // true
set3.add(8);
console.log(set3.isSubsetOf(set1)); // true
set3.add(9999);
console.log(set3.isSubsetOf(set1)); // false
console.log(set3.isSubsetOf(set2)); // false
