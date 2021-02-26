from typing import List


class Solution:
    def maxArea(self, height: List[int]) -> int:
        size = len(height)

        if size == 0 or size == 1:
            return 0

        max_area = 0
        p1 = 0
        p2 = size - 1

        while p1 != p2:
            h1 = height[p1]
            h2 = height[p2]
            if h1 < h2:
                area = h1 * (p2 - p1)
                p1 += 1
            else:
                area = h2 * (p2 - p1)
                p2 -= 1

            if max_area < area:
                max_area = area

        return max_area


solution = Solution()
height = [1,8,6,2,5,4,8,3,7]
assert solution.maxArea(height) == 49
