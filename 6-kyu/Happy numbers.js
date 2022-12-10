/* 
A happy number is a number defined by the following process: starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.

Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers (or sad numbers) (Wikipedia).

Write a function that takes n as parameter and return true if and only if n is an happy number, false otherwise.
*/

function isHappy(n) {
  let limit = 0;
  while (n !== 1) {
    n = [...`${n}`].map(Number).reduce((acc, cur) => acc + Math.pow(cur, 2), 0);
    if (limit >= 20) break;
    limit++;
  }
  return n === 1;
}
