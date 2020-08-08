/*
 * @lc app=leetcode id=467 lang=javascript
 *
 * [467] Unique Substrings in Wraparound String
 */

// @lc code=start
/**
 * @param {string} p
 * @return {number}
 */
var findSubstringInWraproundString = function(p) {
    // manipulate substrings
    // for each substring, take it if it's in the alpha circular order

    // substring(begin,end) + str[end]
    // dp[begin][end] =
    //  true if begin+1 is end
    //  true if substr[begin,end) is alpha-circular and str[end-1] = str[end] + 1 in alpha-circular order
    //  false otherwise

    // counter[substr[begin,end)] = 1 if substr[begin,end) is alpha-circular

    // return sum of counter

    // z a b
    // za ab
    // zab

    // continuous-alpha-circular order
    // a -> b -> c
    // z -> a
    // zab -> ...z + a

    if(!p) {
        return 0
    }

    const charCodeA = "a".charCodeAt(0)
    const charCodeZ = "z".charCodeAt(0)
    const dp = []
    for(let i=0; i <= charCodeZ - charCodeA; i++) {
        dp[i] = 0
    }
    dp[p.charCodeAt(0)-charCodeA] = 1

    let counter = 1
    for(let i=1; i < p.length; i++) {
        const prev = p.charCodeAt(i-1)
        const cur = p.charCodeAt(i)
        if (prev+1 === cur) {
            counter++
        } else if ((prev === charCodeZ) && (cur === charCodeA)) {
            counter++
        } else {
            counter = 1
        }
        dp[cur-charCodeA] = Math.max(dp[cur-charCodeA], counter)
    }

    return dp.reduce((sum, v) => sum+v, 0)
};
// @lc code=end

