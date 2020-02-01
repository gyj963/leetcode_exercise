///////////解法一
/**
 * 
 * Runtime: 76 ms, faster than 41.63% of JavaScript online submissions for Longest Consecutive Sequence.
 * Memory Usage: 36.1 MB, less than 100.00% of JavaScript online submissions for Longest Consecutive Sequence.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    var sortedNums = nums.sort((a,b)=>a-b)
    var lengthArray = []
    var maxLength = 0
    for(var i=0;i<sortedNums.length;i++){
        if(i == 0){
            lengthArray[i] = 1
            if(lengthArray[i] > maxLength){
                maxLength = lengthArray[i]
            }
        } else if(sortedNums[i] == sortedNums[i-1] + 1){
            lengthArray[i] = lengthArray[i-1] + 1
            if(lengthArray[i] > maxLength){
                maxLength = lengthArray[i]
            }
        } else if(sortedNums[i] !== sortedNums[i-1]) {
            lengthArray[i] = 1
            if(lengthArray[i] > maxLength){
                maxLength = lengthArray[i]
            }
        } else {
            lengthArray[i] = lengthArray[i-1]
        }
    }
    return maxLength
};



///////////解法二
/**
 * Runtime: 64 ms, faster than 77.25% of JavaScript online submissions for Longest Consecutive Sequence.
 * Memory Usage: 35.2 MB, less than 100.00% of JavaScript online submissions for Longest Consecutive Sequence.
 */
 /**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    var numSet = new Set(nums)
    var maxLen = 0
    numSet.forEach((num)=>{
        if(!numSet.has(num-1)){
            var curNum = num
            var curLen = 1 
            while(numSet.has(curNum+1)){
                curNum = curNum+1
                curLen = curLen+1
            }
            maxLen = Math.max(curLen, maxLen)
        } 
    })
    return maxLen
};