/*
 *  The maximum sum subarray problem consists in finding the maximum sum of
 *  a contiguous subsequence in an array or list of integers:

    maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
    // should be 6: [4, -1, 2, 1]
*
*
*
* */

function maxSequence(arr) {
    if(arr.length === 0) return 0
    if(arr.length === 1 || arr.length === 2) return Math.max(...arr)

    arr = arr.concat([''])

    let sums = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            let subArray = arr.slice(i, j);
            if (subArray.length > 1) {
                sums[sums.length] = [
                    subArray,
                    subArray.reduce((acc, cur) => acc + cur, 0),
                ];
            }
        }
    }
    return sums.length && sums.some(e => e[1] > 0) ? sums.find((s) => s[1] === Math.max(...sums.map((e) => e[1]))).pop() : 0
}