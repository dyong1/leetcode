/*
 * @lc app=leetcode id=563 lang=javascript
 *
 * [563] Binary Tree Tilt
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findTilt = function(root) {
    if(!root) {
        return 0
    }

    let acc = {sum: 0}
    tilt(acc, root)
    return acc.sum
};
function tilt(acc, node) {
    if (!node) {
        return 0
    }
    tilt(acc, node.left)
    tilt(acc, node.right)
    acc.sum += Math.abs(treeSum(node.left) - treeSum(node.right))
}
function treeSum(node) {
    if(!node) {
        return 0
    }

    let left = 0
    if(node.left) {
        left = treeSum(node.left)
    }
    let right = 0
    if(node.right) {
        right = treeSum(node.right)
    }
    return node.val + left + right
}
// @lc code=end

