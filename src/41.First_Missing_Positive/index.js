/**
 * 解法一
 * 使用原数组替换
 * 时间复杂度 O(n)
 * 空间复杂度 O(1)
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let len = nums.length
    for(let i=0;i<len;i++){
        let curIndex = i
        let curNum = i+1
        while(nums[curIndex] !== curNum && nums[curIndex] > 0 && nums[curIndex]<=len){
            let newIndex = nums[curIndex]-1
            if(nums[curIndex] == nums[newIndex]){
                break;
            }
            let tmp = nums[curIndex]
            nums[curIndex] = nums[newIndex]
            nums[newIndex] = tmp
        }
    }
    let res = 0
    for(let i=0;i<len;i++){
        if(nums[i]!==i+1){
            res = i+1
            break;
        }
    }
    if(res<=0){
        res = nums.length+1
    }
    return res
};
/////////////////////////////////////////////////
/**
 * 解法二
 * 暴力 
 * 时间复杂度 O(n)
 * 空间复杂度 O(n)
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let numsSet = new Set(nums)
    let max = Math.max(...nums)
    let res = 1
    while(numsSet.has(res) && res<=max){
        res++
    }
    return res
};