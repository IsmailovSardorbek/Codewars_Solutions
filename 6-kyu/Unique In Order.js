/* 
    For example:

    uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
    uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
    uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/

var uniqueInOrder = function (iterable) {
  let arr = [...iterable];

  for (let i = 1; i < arr.length; i++) {
    while (arr[i] === arr[i - 1]) {
      arr.splice(i, 1);
    }
  }

  return arr;
};
