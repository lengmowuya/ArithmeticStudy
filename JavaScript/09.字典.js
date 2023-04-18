// 字典,也被称为映射,符号表或关联数组.
// 在字典(或称为映射)中,我们用键值对的形式来存储数据.
// 散列表也是以键值对，但是散列表和字典的实现方式略有不同。

// import 
function defaultToString(item){
    if(item === null){
        return 'NULL';
    } else if (item === undefined){
        return 'UNDEFINED';
    } else if (typeof item === 'string' || item instanceof String){
        return `${item}`;
    }
    return item.toString();
}
class Dictionary{
    constructor(toStrFn = defaultToString){
        this.toStrFn = toStrFn;
        this.table = {};
    }
    hasKey(key){
        return this.table[this.toStrFn(key)] != null;
    }
    set(key,value){
        if(key == null || value == null) return false;
        const tableKey = this.toStrFn(key);
        this.table[tableKey] = new ValuePair(key,value);
        return true;
    }
    remove(key){
        if(this.hasKey(key)){
            delete this.table[this.toStrFn(key)];
            return true;
        }
        return false;
    }
    get(key){
        const valuePair = this.table[this.toStrFn(key)];
    }
    keyValues(){
        return Object.values(this.table);
    }
    keys(){
        return this.keyValues().map(valuePair => valuePair.key);
    }
    values(){
        return this.keyValues().map(valuePair => valuePair.value);
    }
    forEach(callbackFn){
        const valuePairs = this.keyValues();
        for(let i = 0; i < valuePairs.length ; i++){
            const result = callbackFn(valuePairs[i].key,valuePairs[i].value);
            if(result === false){
                break;
            }
        }
    }
    size(){
        return Object.keys(this.table).length;
    }
    isEmpty(){
        return this.size() === 0;
    }
    clear(){
        this.table = {};
    }
    toString(){
        if(this.isEmpty()){
            return '';
        }
        const valuePairs = this.keyValues();
        let objString = `${valuePairs[0].toString()}`;
        for(let i = 1; i < valuePairs.length; i++){
            objString = `${objString},${valuePairs[i].toString()}`;
        }
        return objString;
    }
}
class ValuePair {
    constructor(key,value){
        this.key = key;
        this.value = value;
    }
    toString(){
        return `[#${this.key}:${this.value}]`;
    }
    
}
const dictionary = new Dictionary();
dictionary.set('Gandalf','gandalf@email.com');
dictionary.set('John','John@email.com');
dictionary.set('Tyrion','Tyrion@email.com');
console.log(dictionary.hasKey('Gandalf'));
console.log(dictionary.hasKey('Gandalfxx'));
console.log(dictionary.size());