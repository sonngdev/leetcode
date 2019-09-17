/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

  var paren = {
    "{": "}",
    "[": "]",
    "(": ")"
  };
  var stack = [];

  for (let i = 0; i < s.length; i++) {
    let c = s[i]
    if (paren[c]) { // opening parens
      stack.unshift(paren[c]);
    } else { // closing parens
      if (stack.shift() != c) return false;
    }
  }

  return stack.length == 0;
};

console.log(isValid("{()"));
