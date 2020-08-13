/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // copy the larger number to the last index
    let at = nums1.length-1
    let p1 = m-1
    let p2 = n-1
    while(at >= 0) {
        if(nums1[p1] > nums2[p2] || p2 < 0) {
            nums1[at] = nums1[p1]
            p1--
        } else {
            nums1[at] = nums2[p2]
            p2--
        }
        at--
    }
};
// @lc code=end

