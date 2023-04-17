// 集合的定义:由一组无序且唯一的项组成的
// 与数学的有限集合概念相同,但是应用在计算机科学的数据结构中.因为很多时候计算机科学就是数学的实践.

class Set{
    constructor(){
        // 有一个非常重要的细节是,我们用对象而不是数组实现集合(虽然可以使用数组).
        // JS的对象不允许一个键指向两个不同的属性,保证了集合里的元素都是唯一的.
        this.items = {};
    }
    has(element){
        // return element in this.items
        return Object.prototype.hasOwnProperty.call(this.items,element);
    }
    // 对对象无法支持
    add(element){
        if(!this.has(element)){
            this.items[element] = element;
            return true;
        }
        return false;
    }
    delete(element){
        if(this.has(element)){
            delete this.items[element];
            return true;
        }
        return false;
    }
    clear(){
        this.items = {};
    }
    size(){
        return Object.keys(this.items).length;
        // 或者统计for in迭代,但有可能迭代到原型,所以迭代时还需要this.has(key)判断,属实没必要
    }
    // 高版本写法
    values(){
        return Object.values(this.items);
        // Object.values返回一个包含给定对象所有属性的数组.
        // 但是注意，它是ES2017添加进来的.
    }
    // 低版本兼容写法
    valuesLegacy(){
        let values = [];
        for(let key in this.items){
            if(this.items.hasOwnProperty(key)){
                values.push(key);
            }
        }
        return values;
    };
}
const set = new Set();
set.add(1);
set.add(2);
set.add(2);
set.add('sdfwe');
console.log(set.has(2));
// 对象添加几乎不可用
    // set.add({万万没想到:'666'});
    // set.add({zhang:'999'});
console.log(set.values());

module.exports = {Set};