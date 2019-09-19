/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let over = false;

  const l = digits.length;
  for (let i = l - 1; i >= 0; i--) {
    const y = digits[i] + (i === l - 1) + over;
    over = y >= 10;
    digits[i] = y % 10;
  }

  if (over) digits.unshift(1);

  return digits;
};
