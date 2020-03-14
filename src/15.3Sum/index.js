//此解法过于暴力，更优的解法待研究
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function(nums) {
    var numMap = new Map()
    var numStrMap = {}
    var resArr = []
    nums = nums.sort((a,b)=>a-b)
    nums.forEach((num)=>{
        var count = numMap.get(num)
        if(count){
            numMap.set(num, count + 1) 
        }else{
            numMap.set(num, 1)
        }
    })
    var uniqueNums = Array.from(numMap.keys())
    for(var i=0;i<uniqueNums.length;i++){
        for(var j=i+1;j<uniqueNums.length;j++){
            var numCombine = uniqueNums[i]+uniqueNums[j]
            var count = numMap.get(-numCombine)
            if(count && ((-numCombine >= uniqueNums[i]) || (-numCombine >= uniqueNums[j]))){
                if(!((-numCombine==uniqueNums[i] || -numCombine==uniqueNums[j]) && count-1<=0)){
                    var resUnitArr = [uniqueNums[i],uniqueNums[j], -numCombine].sort()
                    var uniqueStr = resUnitArr.join(',')
                    if(!numStrMap[uniqueStr]){
                        numStrMap[uniqueStr]=true
                        resArr.push(resUnitArr)
                    }
                }
            }  
        }
    }
    if(numMap.get(0)>=3){
        resArr.push([0,0,0])
    }
    return resArr
};
