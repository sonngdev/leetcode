from typing import List


class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        size = len(nums)
        if size == 0:
            return None

        # Kadane's algorithm
        # https://www.youtube.com/watch?v=w_KEocd__20
        max_sum = -float('inf')
        current_sum = 0
        for i in range(size):
            current_sum += nums[i]
            if max_sum < current_sum:
                max_sum = current_sum
            if current_sum < 0:
                current_sum = 0

        return max_sum


solution = Solution()
assert solution.maxSubArray([-2,1,-3,4,-1,2,1,-5,4]) == 6
assert solution.maxSubArray([1]) == 1
assert solution.maxSubArray([0]) == 0
assert solution.maxSubArray([-1]) == -1
assert solution.maxSubArray([-100000]) == -100000
assert solution.maxSubArray([3,-2,-3,-3,1,3,0]) == 4
