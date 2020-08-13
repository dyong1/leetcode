/*
 * @lc app=leetcode id=56 lang=javascript
 *
 * [56] Merge Intervals
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    // [[1,3],[2,6],[8,10],[15,18]]

/*
    if intervals is empty:
        return []

    last: the last interval that has been checked, possibly merged already
    current: the current interval
    answer: [] (merged intervals)

    for each interval in intervals:
        if last doesn't overlap with current:
            answer = [...answer, current]
        if last overlaps with current:
            answer = [...answer, merged(last, current)]
        last = answer[answer.length - 1]
    return answer
*/

    if (intervals.length === 0) {
        return []
    }

    intervals.sort((lhs, rhs) => lhs[0] !== rhs[0] ? lhs[0] - rhs[0] : lhs[1] - rhs[1])

    // [[1,3],[2,6],[8,10],[15,18]]
    let last = null
    const answer = []
    for(let i=0; i < intervals.length; i++) {
        const current = intervals[i]
        if(!isOverlapping(last, current)) {
            answer.push(current)
            last = answer[answer.length-1]
            continue
        }
        answer[answer.length-1] = mergeIntervals(last, current)
        last = answer[answer.length-1]
    }
    return answer
};
function isOverlapping(prev, next) {
    if(!prev) {
        return false
    }
    return !(prev[0] < next[0] && prev[1] < next[0])
}
function mergeIntervals(prev, next) {
    return [Math.min(prev[0], next[0]), Math.max(prev[1], next[1])]
}
// @lc code=end

