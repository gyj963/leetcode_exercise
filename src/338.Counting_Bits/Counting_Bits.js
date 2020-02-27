/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    let curCompareNum = Math.pow(2,0)
    let beforeCompareNum = curCompareNum
    let cache = []
    for(let i = 0; i <= num; i++){
        let count = 0
        let remainder
        if(parseInt(i / curCompareNum)){
            count = 1
            remainder = i % beforeCompareNum
            beforeCompareNum = curCompareNum
            curCompareNum *= 2
        } else if(parseInt(i / beforeCompareNum)) {
            remainder = i % beforeCompareNum
            count = 1
        }
        if(remainder){
            count += cache[remainder]
        }
        cache[i] = count
    }
    return cache
};