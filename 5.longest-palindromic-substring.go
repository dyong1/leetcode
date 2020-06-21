package leetcode

/*
 * @lc app=leetcode id=5 lang=golang
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
func longestPalindrome(s string) string {
	switch len(s) {
	case 0:
		return ""
	case 1:
		return s
	}

	longestSubrange := &subrange{
		begin: 0,
		end:   1,
	}
	dp := make([][]int, len(s))
	for i := 0; i < len(dp); i++ {
		dp[i] = make([]int, len(s)+1)
	}

	// lps(p,p) = 0
	// lps(p,p+1) = 1
	// lps(p,p+2) = 2 if s[p] == s[p+1]
	for i := 0; i < len(s); i++ {
		dp[i][i+1] = 1
	}
	for i := 0; i < len(s)-2; i++ {
		if s[i] == s[i+1] {
			dp[i][i+2] = 2
			if longestSubrange.length() < 2 {
				longestSubrange.begin = i
				longestSubrange.end = i + 2
			}
		}
	}

	// O(NlgN)
	for p := 0; p < len(s); p++ {
		if longestSubrange.length() > len(s)-p {
			continue
		}
		lps(s, longestSubrange, dp, p, len(s))
	}
	for q := len(s); q > 0; q-- {
		if longestSubrange.length() > q {
			continue
		}
		lps(s, longestSubrange, dp, 0, q)
	}

	return s[longestSubrange.begin:longestSubrange.end]
}

func lps(
	s string,
	longestSubrange *subrange,
	dp [][]int,
	begin int,
	end int,
) int {
	switch {
	case begin == end:
		return 0
	case begin >= len(s):
		return 0
	case end > len(s):
		return 0
	}

	if dp[begin][end] > 0 {
		return dp[begin][end]
	}

	between := lps(s, longestSubrange, dp, begin+1, end-1)
	if s[begin] == s[end-1] && (end-begin-2 == between) {
		l := between + 2
		if l > longestSubrange.length() {
			longestSubrange.begin = begin
			longestSubrange.end = end
		}
		// take the left-most range
		if l == longestSubrange.length() && begin < longestSubrange.begin {
			longestSubrange.begin = begin
			longestSubrange.end = end
		}
		dp[begin][end] = l
		return l
	}
	dp[begin][end] = between
	return between
}

type subrange struct {
	begin int
	end   int
}

func (s *subrange) length() int {
	return s.end - s.begin
}

// @lc code=end
