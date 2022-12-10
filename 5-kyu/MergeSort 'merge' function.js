/*
         The name of the function in this example is "mergesorted". It should return a big sorted array from two smaller sorted arrays: e.g.

         mergesorted([1,2],[3,4]) //should: [1,2,3,4]

         mergesorted([1,2],[3]) //should: [1,2,3]

         mergesorted([1],[2, 3]) //should: [1,2,3]
* */

function mergesorted(a, b) {
  let merged = [...a, ...b];

  let res = [];

  while (merged.length > 0) {
    let min = merged.find((n) => n === Math.min(...merged));
    res.push(min);
    merged[merged.indexOf(min)] = "";
    merged = merged.filter((s) => s !== "");
  }
  return res;
}
