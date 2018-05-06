/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  if (!l1 && !l2) return null;

  var result = new ListNode(null);
  var cur0 = result;
  var cur1 = l1;
  var cur2 = l2;

  while (cur1 && cur2) {
    if (cur1.val < cur2.val) {
      cur0.val = cur1.val;
      cur1 = cur1.next;
    } else {
      cur0.val = cur2.val;
      cur2 = cur2.next;
    }
    cur0.next = new ListNode(null);
    cur0 = cur0.next;
  }

  while (cur1 || cur2) {
    if (!cur1) {
      cur0.val = cur2.val;
      cur2 = cur2.next;
    } else {
      cur0.val = cur1.val;
      cur1 = cur1.next;
    }
    if (cur1 || cur2) {
      cur0.next = new ListNode(null);
      cur0 = cur0.next;
    }
  }

  return result;
};

// // Simpler but lower performance way
// var mergeTwoLists = function(l1, l2) {
//   var a1 = [], a2 = [];
//   var cur1 = l1, cur2 = l2;
// 
//   while (cur1) {
//     a1.push(cur1.val);
//     cur1 = cur1.next;
//   }
//
//   while (cur2) {
//     a2.push(cur2.val);
//     cur2 = cur2.next;
//   }
//
//   var a0 = a1.concat(a2).sort((a,b) => a - b);
//   if (a0.length == 0) return null;
//
//   var result = new ListNode(null);
//   var cur0 = result;
//   for (let i = 0; i < a0.length; i++) {
//     cur0.val = a0[i];
//     if (i != a0.length - 1) {
//       cur0.next = new ListNode(null);
//       cur0 = cur0.next;
//     }
//   }
//
//   return result;
// };
