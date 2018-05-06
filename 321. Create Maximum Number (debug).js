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
    console.log("k="+k)
    if (k === 0) {
      console.log("-----------")
      return result;
    }
    let numsArr = nums1.concat(nums2).sort((a,b)=>(b-a));
    console.log("numsArr: "+numsArr)
    for (let i = 0; i < numsArr.length; i++) {
      let i1 = nums1.indexOf(numsArr[i]);
      let i2 = nums2.indexOf(numsArr[i]);
      let valid1 = (nums1.length-1-i1) + (nums2.length) >= (k-1) && i1 !== -1;
      let valid2 = (nums2.length-1-i2) + (nums1.length) >= (k-1) && i2 !== -1;
      // console.log("numsArr[i]:"+numsArr[i])
      // console.log("valid1: "+valid1)
      // console.log("valid2: "+valid2)
      // console.log("nums1: "+nums1)
      // console.log("nums2: "+nums2)
      console.log("-----------")
      if (valid1 && !valid2) {
        result.push(numsArr[i]);
        console.log(result)
        return generate(nums1.slice(i1+1), nums2, k-1, result);
        break;
      }
      if (valid2 && !valid1) {
        result.push(numsArr[i]);
        console.log(result)
        return generate(nums1, nums2.slice(i2+1), k-1, result);
        break;
      }
      if (valid1 && valid2) {
        result.push(numsArr[i]);
        let case1 = generate(nums1.slice(i1+1), nums2, k-1, result.slice());
        let case2 = generate(nums1, nums2.slice(i2+1), k-1, result.slice());
        console.log("case1: "+case1);
        console.log("case2: "+case2);
        for (let j = 0; j < case1.length; j++) {
          if (case1[j] !== case2[j]) {
            return (case1[j] > case2[j]) ? case1 : case2;
          }
        }
        return case1;
      }
    }
  }

  return generate(nums1, nums2, k, []);
};

console.log(maxNumber(nums1, nums2, k))
