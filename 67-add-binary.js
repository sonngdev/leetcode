/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  function pad(str, n) {
    const padding = n - str.length;
    for (let i = 1; i <= padding; i++) str = '0' + str;
    return str;
  }

  const l = Math.max(a.length, b.length);
  a = pad(a, l);
  b = pad(b, l);

  let res = ''
  let over = false;
  for (let i = l - 1; i >= 0; i--) {
    const n = +a[i] + +b[i] + over;
    over = n > 1;
    res = (n % 2).toString() + res;
  }
  if (over) res = '1' + res;

  return res;
};
