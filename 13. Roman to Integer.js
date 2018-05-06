var romanToInt = function(s) {
  var a = [
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000]
  ]
  var num = 0;

  for (let i=0; i<s.length; i++) {
    for (let j=0; j<a.length; j++) {
      if (s[i] === a[j][0]) {
        if (s[i] === "I" || s[i] === "X" || s[i] === "C") {
          if (s[i+1] === a[j+1][0]) {
            num += a[j+1][1]-a[j][1];
            i++;
            break;
          } else if (s[i+1] === a[j+2][0]) {
            num += a[j+2][1]-a[j][1];
            i++;
            break;
          } else {
            num += a[j][1];
            break;
          }
        } else {
          num += a[j][1];
          break;
        }
      }
    }
  }

  return num;
};

console.log(romanToInt("MMCCCXLIV"))
