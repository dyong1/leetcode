/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Implement strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(haystack === needle) {
        return 0
    }
    if(!haystack) {
        return -1
    }
    if(!needle) {
        return 0
    }

    for(let i=0; i < haystack.length; i++) {
        let match = true
        for(let j=0; j < needle.length; j++) {
            if (haystack[i+j] !== needle[j]) {
                match = false
                break
            }
        }
        if (match) {
            return i
        }
    }
    return -1
};
// @lc code=end

