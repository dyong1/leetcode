package leetcode

/*
 * @lc app=leetcode id=48 lang=golang
 *
 * [48] Rotate Image
 */

// @lc code=start
func rotate(matrix [][]int) {
	// NxN matrix (Y,X)

	if len(matrix) <= 1 {
		return
	}

	/*
	 *
	 * directions in matrix index
	 *
	 *               increasing
	 *            -----------------
	 *            |///////////////|
	 *            |///////////////|
	 * decreasing |///////////////| increasing
	 *            |///////////////|
	 *            |///////////////|
	 *            -----------------
	 *               decreasing
	 *
	 */

	b := 0
	e := len(matrix)
	for e-b > 1 {
		for i := b; i < e-1; i++ {
			lastTop := matrix[b][i]                       // store top temporaily before overwriting copy
			matrix[b][i] = matrix[e-1-(i-b)][b]           // copy: top <- left
			matrix[e-1-(i-b)][b] = matrix[e-1][e-1-(i-b)] // copy: left <- bottom
			matrix[e-1][e-1-(i-b)] = matrix[i][e-1]       // copy: bottom <- right
			matrix[i][e-1] = lastTop                      // copy: right <- top(stored temporarily)
		}
		b++
		e--
	}
}

// @lc code=end
