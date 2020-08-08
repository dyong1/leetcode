/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // abcabcbb
    // abc
    //  bca
    //   cab
    //    abc
    //     bcb

    let begin = 0
    let max = 0
    let charSeen = {}
    for(let i=0; i < s.length; i++) {
        if(charSeen[s[i]]) {
            charSeen = {}
            begin++
            i = begin
        }
        charSeen[s[i]] = true
        max = Math.max(max, i - begin + 1)
    }
    return max
};
// @lc code=end

