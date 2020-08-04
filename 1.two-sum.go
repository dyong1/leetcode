package leetcode

/*
 * @lc app=leetcode id=1 lang=golang
 *
 * [1] Two Sum
 */

// @lc code=start
func twoSum(nums []int, target int) []int {
	// f(x) = index
	// f(2) = 0
	// f(7) = 1
	// x -> y

	// f[2] => 0
	// f[7] => 1

	// f := map[int]int{}
	// for i := 0; i < len(nums); i++ {
	// 	f[nums[i]] = i
	// }

	// for i := 0; i < len(nums); i++ {
	// 	toFind := target - nums[i]
	// 	if toFind == nums[i] {
	// 		continue
	// 	}
	// 	idx, ok := f[toFind]
	// 	if ok && idx >= 0 {
	// 		return []int{i, idx}
	// 	}
	// }

	// return nil

	// len(nums) = 4

	// i,j -> num[i],num[j]

	// 0,1 -> 2,7
	// 0,2 -> 2,11
	// 0,3 -> 2,15

	// 1,2 -> 7,11
	// 1,3 -> 7,15

	// 2,3 -> 11,15

	// 0, 1, 2 < 3
	for i := 0; i < len(nums)-1; i++ {
		// i+1, i+2, ... < 4
		// 1, 2, 3
		// 2, 3
		// 3
		for j := i + 1; j < len(nums); j++ {
			if nums[i]+nums[j] == target {
				return []int{i, j}
			}
		}
	}
	return nil
}

// @lc code=end
