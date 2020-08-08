/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let carry = 0
    let lastSum = null
    let sumHead = null
    while(l1 || l2 || carry > 0) {
        let val = carry
        if(l1) {
            val += l1.val
        }
        if(l2) {
            val += l2.val
        }

        const sum = new ListNode(val%10)
        if(!sumHead) {
            sumHead = sum
        }
        if(lastSum) {
            lastSum.next = sum
        }
        lastSum = sum

        carry = Math.floor(val/10)

        if(l1) {
            l1 = l1.next
        }
        if(l2) {
            l2 = l2.next
        }
    }
    return sumHead
};
// @lc code=end

