/* Write a function that when given a number >= 0, returns an Array of ascending length subarrays.
 Note: the subarrays should be filled with 1s
 */

function pyramid(n) {
  return new Array(n).fill``.map((value, index) =>
    "1".repeat(index + 1).split``.map(Number)
  );
}
