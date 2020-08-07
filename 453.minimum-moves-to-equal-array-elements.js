/*
 * @lc app=leetcode id=453 lang=javascript
 *
 * [453] Minimum Moves to Equal Array Elements
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    // sum + m * (n-1) = (m + min) * n = mn + n*min
    // x = m + min
    // sum + m*(n-1) = mn + n*min
    // m*(n-1) - mn = n*min - sum
    // m = sum - n*min
    const min = Math.min(...nums)
    const sum = nums.reduce((sum, n) => sum + n, 0)
    return sum - (nums.length * min)
};
// @lc code=end

