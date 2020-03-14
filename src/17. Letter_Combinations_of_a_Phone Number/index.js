/**
 * 解法一
 * @param {string} digits
 * @return {string[]}
 */
let digitLetterMap = {
    2: ['a','b','c'],
    3: ['d','e','f'],
    4: ['g','h','i'],
    5: ['j','k','l'],
    6: ['m','n','o'],
    7: ['p','q','r','s'],
    8: ['t','u','v'],
    9: ['w','x','y','z'],
}
var letterCombinations = function(digits) {
    let res = [];
    let dealCombination = (combineStr, digits) => {
        if(!digits.length){
            res.push(combineStr)
            return
        }
        let letterArr = digitLetterMap[digits[0]];
        for(let i=0;i<letterArr.length;i++){
            dealCombination(combineStr+letterArr[i], digits.substr(1))
        }
    }
    if(digits.length){
        dealCombination('',digits)
    }
    return res
};

//////////////////////////////////////////
/**
 * 解法二
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let cache = {}
    let digitLetterMap = {
        2: ['a','b','c'],
        3: ['d','e','f'],
        4: ['g','h','i'],
        5: ['j','k','l'],
        6: ['m','n','o'],
        7: ['p','q','r','s'],
        8: ['t','u','v'],
        9: ['w','x','y','z'],
    }
    if(!digits.length){
        return []
    }
    for(let i = 0;i<digits.length;i++){
        let digit = digits[i];
        let predigit = digits.slice(0, i)
        if(cache[predigit]){
            let curdigit = digits.slice(0, i+1)
            cache[curdigit]=[]
            for(let k = 0;k<digitLetterMap[digit].length;k++){
                for(let j = 0;j<cache[predigit].length;j++){
                    cache[curdigit].push(`${cache[predigit][j]}${digitLetterMap[digit][k]}`)
                }    
            }
        }else {
            cache[digit] = digitLetterMap[digit]
        }
    }
    return cache[digits]
};