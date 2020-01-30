//优化前（第一版）：
/**
 * @param {number} n
 * @return {number}
 */
var res = [0, 1, 2, 5, 14]
var numTrees = function(n) {
    n = Number(n)
    if(n<=4){
        return res[n]
    }
    var cur = 5
    while(cur <= n){
        var curRes = 0
        curRes = (res[cur-1] + res[cur-2])*2
        for(var x = 3; x<=cur-2; x++){
            curRes += res[x-1]*res[cur-x]
        }
        res[cur] = curRes
        cur++
    }
    return res[n]
};

/////////////////////////////////////////////////////////
//优化后（第二版）：

/**
 * @param {number} n
 * @return {number}
 */
var resMap = [1, 1, 2]
var numTrees = function(n) {
    if(resMap[n]){
        return resMap[n]
    }
    var res = 0
    for(var x=1; x<=n; x++){
       res += numTrees(x-1) * numTrees(n-x)
    }
    resMap[n] = res
    return resMap[n]
};