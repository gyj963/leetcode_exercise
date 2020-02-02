/**
 * 解法一
 * 马拉车算法 O(n)
 */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let T = ""
    if(s.length == 0){ 
        T="^$"
    } else {
        T = "^"
        for(let i = 0; i < s.length; i++){
            T += `#${s[i]}`
        }
        T += "#$"
    }
    let C = 0
    let R = 0
    let P = []
    for (let i = 0;i < T.length; i++) {
        if (R > i) {
            let i_mirror = 2 * C - i // i-c = c-i_mirror => i_mirror = 2*C-i
            P[i] = Math.min(R-i, P[i_mirror])
        } else {
            P[i] = 0
        }
        while (T.charAt(i + P[i] + 1) == T.charAt(i - P[i] - 1)) {
            P[i]++
        }
        if (i+P[i] > R) {
            C = i
            R = i + P[i]
        }
    }
    let maxLen = Math.max(...P)
    let maxLenIndex = P.indexOf(maxLen)
    let beginIndex = Math.floor((maxLenIndex - maxLen)/2)
    return s.substr(beginIndex, maxLen)
}

//////////////////////////////////
/**
 * 解法二 （没过 TLE了）
 * 暴力对比正反串
 */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var maxLen = 1
    var longestStr = s[0] || ''
    for(var i=0;i<s.length;i++){
        var len = 2
        while(len <= s.length-i){
            var str = s.slice(i,i+len)
            if(str == str.split('').reverse().join('')){
                if(len > maxLen){
                    maxLen = len
                    longestStr = str
                }
            }
            len++
        }
    }
    return longestStr
};