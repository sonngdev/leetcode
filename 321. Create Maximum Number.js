nums1 = [9,5,6,2,4,3,6,2]
nums2 = [5,7,6,2,2,1,3,0,2,8,9,7,7,3,2,2,9,4,5,1]
k = 28

var maxNumber = function(nums1, nums2, k) {
  let m = nums1.length;
  let n = nums2.length;
  if (k > m + n) {
    return;
  }

  function generate(nums1, nums2, k, result) {
    if (k === 0) { // not = but ===
      return result;
    }
    let numsArr = nums1.concat(nums2).sort((a,b)=>(b-a));
    for (let i = 0; i < numsArr.length; i++) {
      let i1 = nums1.indexOf(numsArr[i]);
      let i2 = nums2.indexOf(numsArr[i]);
      let valid1 = (nums1.length-1-i1) + (nums2.length) >= (k-1) && i1 !== -1;
      let valid2 = (nums2.length-1-i2) + (nums1.length) >= (k-1) && i2 !== -1;
      if (valid1 && !valid2) {
        result.push(numsArr[i]);
        return generate(nums1.slice(i1+1), nums2, k-1, result);
      }
      if (valid2 && !valid1) {
        result.push(numsArr[i]);
        return generate(nums1, nums2.slice(i2+1), k-1, result);
      }
      if (valid1 && valid2) {
        result.push(numsArr[i]);
        let case1 = generate(nums1.slice(i1+1), nums2, k-1, result.slice());
        let case2 = generate(nums1, nums2.slice(i2+1), k-1, result.slice());
        for (let j = 0; j < case1.length; j++) {
          if (case1[j] !== case2[j]) {
            return (case1[j] > case2[j]) ? case1 : case2;
          }
        }
        return case1; // default value to return if case1 === case2 (that could happen even though the route branched)
      }
    }
  }

  return generate(nums1, nums2, k, []);
};

console.log(maxNumber(nums1, nums2, k))
