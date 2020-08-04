package leetcode

import "container/list"

/*
 * @lc app=leetcode id=200 lang=golang
 *
 * [200] Number of Islands
 */

// @lc code=start
func numIslands(grid [][]byte) int {
	height := len(grid)
	if height == 0 {
		return 0
	}
	width := len(grid[0])
	if width == 0 {
		return 0
	}
	islandCount := 0
	for y := 0; y < height; y++ {
		for x := 0; x < width; x++ {
			if grid[y][x] == '1' {
				markIslandByExpansion(grid, height, width, y, x)
				islandCount++
			}
		}
	}
	return islandCount
}
func markIslandByExpansion(
	grid [][]byte,
	height int, width int,
	y int, x int,
) {
	type pos struct {
		y int
		x int
	}
	positionsToVisit := list.New()
	positionsToVisit.PushBack(pos{y: y, x: x})
	grid[y][x] = '2'
	for positionsToVisit.Len() > 0 {
		e := positionsToVisit.Front()
		cur := e.Value.(pos)
		y := cur.y
		x := cur.x
		positionsToVisit.Remove(e)
		if y-1 >= 0 && grid[y-1][x] == '1' {
			positionsToVisit.PushBack(pos{y: y - 1, x: x})
			grid[y-1][x] = '2'
		}
		if y+1 < height && grid[y+1][x] == '1' {
			positionsToVisit.PushBack(pos{y: y + 1, x: x})
			grid[y+1][x] = '2'
		}
		if x-1 >= 0 && grid[y][x-1] == '1' {
			positionsToVisit.PushBack(pos{y: y, x: x - 1})
			grid[y][x-1] = '2'
		}
		if x+1 < width && grid[y][x+1] == '1' {
			positionsToVisit.PushBack(pos{y: y, x: x + 1})
			grid[y][x+1] = '2'
		}
	}
}

// @lc code=end
