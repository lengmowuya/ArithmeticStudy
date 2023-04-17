// 905.按奇偶校验对数组排序
// 偶数移到前面,奇数全在后面.
// 使用双指针的快速排序法
/* 
左右两个指针在数组两端.
当左不为偶数,且右为偶数时,两指针的值互换.
当左为偶数,右移.
当右不为偶数,左移.

直至两指针并拢时(left==right),排序结束.
*/
var sortArrayByParity = function(nums) {
    let left = 0;
    let right = nums.length-1;
    while(left != right){
        if(nums[left] % 2 != 0){
            if(nums[right] % 2 == 0){
                let count = nums[left];
                nums[left] = nums[right];
                nums[right] = count;
            }else{
                right --;
            }
        }else{
            left ++;
        }
    }
    return nums;
};
console.log(sortArrayByParity([3,1,2,8,1,1,1,19,22,4]));