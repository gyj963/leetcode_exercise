/**
 * 解法一
 * Time complexity: O(nlogn)
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let dp = [];
    nums.forEach((num)=>{
        let i = binarySearch(dp, 0, dp.length,num)
        dp[i] = num
    })
    return dp.length
};
var binarySearch = (dp, start, end, num) => {
    if(start == 0 && end == 0){
        return 0
    }
    while(start < end){
        let curIndex = Math.floor((start+end)/2)
        if(dp[curIndex] < num) {
            start = curIndex != start?curIndex:curIndex+1
        } else if (dp[curIndex] > num) {
            end = curIndex != end?curIndex:curIndex-1
        } else {
            return curIndex
        }
    }
    return start
}

/////////////////////////////////////////////////////////
/**
 * 解法二
 * Time complexity: O(n2)
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let lengthCache = [];
    for(let i=0;i<nums.length;i++){
        let tmpMax = 1;
        for(let j=0; j<i;j++){
            if(nums[i] > nums[j] && lengthCache[j]+1 > tmpMax){
                tmpMax = lengthCache[j]+1
            }
        }
        lengthCache[i] = tmpMax
    }
    return lengthCache.length?Math.max(...lengthCache):0
};
