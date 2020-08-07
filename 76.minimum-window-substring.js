/*
 * @lc app=leetcode id=76 lang=javascript
 *
 * [76] Minimum Window Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    // Input: S = "ADOBECODEBANC", T = "ABC"
    // Output: "BANC"

    // p1. find all substrings containing every element in t
    // s1. list up all the substrings and leave substrings containing every elem in t
    // O(MN^2) where N = |s| and M = |t|
    // s2. slide window by moving [begin, end) of substring
    // N end positions, N begin positions based on a hueristic
    // therefore, 1 + h1 + h2 + h3 ... hn = O(NH) -> O(N) for constant H


    // p2. store min-length substring

    return s2(s, t)
};
function s2(s, t) {
    let begin = 0;
    let end = 0;

    const requiredCounter = {}
    for (let i = 0; i < t.length; i++) {
        if (requiredCounter[t[i]] === undefined) {
            requiredCounter[t[i]] = 0
        }
        requiredCounter[t[i]]++
    }

    // s: ADOBECODEBANC
    // {
    //     A: 1,
    //     B: 1,
    //     C: 1,
    // }

    let minSubstr = null
    let counter = {}
    while (end <= s.length) {
        // update fullfilling min-substring while minimizing the current substring by moving begin to the right
        const next = minimizedNext({
            s,
            requiredCounter,
            counter,
            minSubstr,
            begin,
            end,
        })
        begin = next.begin
        counter = next.counter
        minSubstr = next.minSubstr

        // take right elem
        if (counter[s[end]] === undefined) {
            counter[s[end]] = 0
        }
        counter[s[end]]++
        end++
    }

    return minSubstr !== null ? minSubstr : ""
}

function minimizedNext(original) {
    let {
        s,
        minSubstr,
        requiredCounter,
        begin,
        end,
        counter,
    } = original

    let fullfilledOnce = false
    while(begin < end && fullfill(requiredCounter, counter)) {
        fullfilledOnce = true
        if (minSubstr === null || (end - begin) < minSubstr.length) {
            minSubstr = s.slice(begin, end)
        }
        counter[s[begin]]--
        begin++
    }

    // restore changes caused by the last move
    // the last move is always unfullfilling
    if(fullfilledOnce) {
        begin--
        counter[s[begin]]++
    }

    return {
        begin,
        counter,
        minSubstr,
    }
}
function fullfill(want, got) {
    for (const e in want) {
        if (got[e] === undefined || got[e] < want[e]) {
            return false
        }
    }
    return true
}
// @lc code=end
