/*
*
*                   The drawing shows 6 squares the sides of which have a length of 1, 1, 2, 3, 5, 8.
*                   It's easy to see that the sum of the perimeters of these squares is :
*                   4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80
*
*                   Could you give the sum of the perimeters of all the squares in a rectangle when
*                   there are n + 1 squares disposed in the same manner as in the drawing
* */

let perimeter = (n) => {
    let arr = [1, 1];

    for (let i = 2; i <= n; i++) {
        arr.push(arr[i - 1] + arr[i - 2]);
    }

    return arr.slice(0, n + 1).reduce((acc, cur) => acc + cur, 0) * 4;
};