// 779.语法中的第k符号
/* 
  '0',
  '01',
  '0110',
  '01101001',
  '0110100110010110',
  '01101001100101101001011001101001',
  '0110100110010110100101100110100110010110011010010110100110010110'

*/
function getTable(length){
    let table = ['0'];
    for(let i = 1;i<length;i++){
        let tr;
        let lastTr = table[i-1];
        tr = lastTr.replace(/0/g,'k');
        // console.log(tr);
        // console.log(lastTr.replace(/1/g,'f'));
        tr = tr.replace(/1/g,'f');
        tr = tr.replace(/k/g,'01');
        tr = tr.replace(/f/g,'10');
        table[i] = tr;
    }
    return table;
}
console.log(getTable(7));