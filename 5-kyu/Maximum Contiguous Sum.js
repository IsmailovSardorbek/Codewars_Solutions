/*
*
              Given an unsorted array of integer values, find the maximum positive sum of any contiguous range within the array.

              An array containing only negative values can return 0.
              Your solution should be efficient enough to not throw a timeout exception.

              Example:
              *
              maxContiguousSum([3, -4, 8, 7, -10, 19, -3]); // returns 24
              maxContiguousSum([-8, -10, -12, -2, -3, 5]); // returns 5
* */


const maxContiguousSum = (arr) => {
  let set = new Set();
  arr = arr.concat([""]);

  arr.forEach((current, index) => {
    arr.map((value, position) => {
      let sum = arr.slice(index, position).reduce((acc, cur) => acc + cur, 0);
      if (sum > 0) set.add(sum);
    });
  });

  return Math.max(...set);
};
