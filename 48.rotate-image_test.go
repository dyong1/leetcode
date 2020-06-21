package leetcode

import (
	"fmt"
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestRotate(t *testing.T) {
	for _, tc := range []struct {
		img  [][]int
		want [][]int
	}{
		{
			img: [][]int{
				{1, 2, 3},
				{4, 5, 6},
				{7, 8, 9},
			},
			want: [][]int{
				{7, 4, 1},
				{8, 5, 2},
				{9, 6, 3},
			},
		},
		{
			img: [][]int{
				{4, 8},
				{3, 6},
			},
			want: [][]int{
				{3, 4},
				{6, 8},
			},
		},
		{
			img: [][]int{
				{5, 1, 9, 11},
				{2, 4, 8, 10},
				{13, 3, 6, 7},
				{15, 14, 12, 16},
			},
			want: [][]int{
				{15, 13, 2, 5},
				{14, 3, 4, 1},
				{12, 6, 8, 9},
				{16, 7, 10, 11},
			},
		},
	} {
		t.Run(fmt.Sprintf("%v", tc.img), func(t *testing.T) {
			rotate(tc.img)
			assert.Equal(t, fmt.Sprintf("%v", tc.want), fmt.Sprintf("%v", tc.img))
		})
	}
}
