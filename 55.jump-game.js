/*
 * @lc app=leetcode id=55 lang=javascript
 *
 * [55] Jump Game
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    if(nums.length === 1) {
        return true
    }
    if(nums[0] === 0) {
        return false
    }
    let maxReachable = 0
    for(let i=0; i < nums.length; i++) {
        if(i > maxReachable) {
            return false
        }
        maxReachable = Math.max(maxReachable, i + nums[i])
    }
    return true
};
// @lc code=end

