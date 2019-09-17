/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  if (n === 1) return '1';

  const x = countAndSay(n - 1);
  let count;
  let char;
  let num = '';
  for (let c of x) {
    if (char === c) count++
    else {
      if (char) num += `${count}${char}`;
      count = 1;
      char = c;
    }
  }
  num += `${count}${char}`;

  return num;
};

console.log(
  countAndSay(5)
)
