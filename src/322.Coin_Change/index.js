/**
 * 解法一（ac）
 * 背包问题 动态规划（dp）
 */
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let cacheMap = {}
    cacheMap[0] = 0
    for(let i=1;i<=amount;i++){
        cacheMap[i] = amount+1
        for(let j=0;j<coins.length;j++){
            if(i-coins[j] >= 0){
                cacheMap[i] = Math.min(cacheMap[i], cacheMap[i-coins[j]]+1)
            }
        }
    }
    return cacheMap[amount] > amount ? -1 : cacheMap[amount]
};
/////////////////////////////////////////////////
/**
 * 解法二（没有ac tle了）
 */
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    if(amount < 1) return 0
    let cacheMap = new Object()
    return mycoinchange(coins, amount, cacheMap)
};

var mycoinchange = function (coins, amount, cacheMap){
    if(amount == 0){
        return 0
    }
    if(amount < 0){
        return -1
    }
    if(cacheMap[amount] > 0){
        return cacheMap[amount]
    }
    let min
    for(let i=0; i<coins.length; i++){
        let r = mycoinchange(coins, amount-coins[i], cacheMap)
        if(r >= 0){
            if(min == void(0)){
                min = r
            }else{
                min = Math.min(min, r)
            }    
        }
    }
    cacheMap[amount] = min == void(0) ? -1 : min + 1
    return cacheMap[amount]
}