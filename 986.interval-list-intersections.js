/*
 * @lc app=leetcode id=986 lang=javascript
 *
 * [986] Interval List Intersections
 */

// @lc code=start
/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var intervalIntersection = function(A, B) {
    let a=0;
    let b=0;
    const answer = []
    while(a < A.length && b < B.length) {
        // intersect
        if(!(A[a][1] < B[b][0] || A[a][0] > B[b][1])) {
            answer.push([
                Math.max(A[a][0], B[b][0]),
                Math.min(A[a][1], B[b][1]),
            ])
        }

        if(A[a][1] < B[b][1]) {
            // A ends before B
            a++
        } else {
            // B ends before A or at the same time
            b++
        }
    }
    return answer
};
// @lc code=end

