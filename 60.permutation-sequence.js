/*
 * @lc app=leetcode id=60 lang=javascript
 *
 * [60] Permutation Sequence
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
let kthPermutation
let count

var getPermutation = function(n, k) {
    // backtrack and count til the count is k
    kthPermutation = null
    count = 0
    backtrack(n, k, Array(n).fill(false), [])
    return kthPermutation
};
function backtrack(n, k, visited, current) {
    if(kthPermutation !== null) {
        return
    }
    if(current.length === n) {
        count++
        if(count === k) {
            kthPermutation = current.join("")
        }
        return
    }
    // x 1 2 3
    //     3 2
    //   2 1 3
    //     3 1
    //   3 1 2
    //     2 1
    for(let i=0; i < visited.length; i++) {
        if(kthPermutation !== null) {
            return
        }
        if(visited[i]) {
            continue
        }
        current.push(i+1)
        visited[i] = true
        backtrack(n, k, visited, current)
        visited[i] = false
        current.pop()
    }
}
// @lc code=end

