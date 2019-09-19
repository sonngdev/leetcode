/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let i = 0;
  const l = nums.length;

  do {
    const n = nums[i];
    if (target <= n) return i;
    i++;
  } while (i < l);

  return l;
};
