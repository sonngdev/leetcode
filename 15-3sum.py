from typing import List


class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        nums = sorted(nums)
        result = []
        size = len(nums)

        for i in range(size - 2):
            fixed = nums[i]
            remaining = 0 - fixed

            p1 = i + 1
            p2 = size - 1
            while p1 != p2:
                n1 = nums[p1]
                n2 = nums[p2]
                if n1 + n2 == remaining and [fixed, n1, n2] not in result:
                    result.append([fixed, n1, n2])
                if n1 + n2 < remaining:
                    p1 += 1
                else:
                    p2 -= 1

        return result


solution = Solution()
actual = solution.threeSum([-1, 0, 1, 2, -1, -4])
expected = [[-1, 0, 1], [-1, 2, -1]]

assert len(actual) == len(expected)
for triplet in actual:
    assert sum(triplet) == 0
