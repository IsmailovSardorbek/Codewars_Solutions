/*
*           mean = (1 + 2 + 2 + 3) / 4 => 2

            variance = ((1 - 2)^2 + (2 - 2)^2 + (2-2)^2 + (3 - 2)^2)  /  4 => 0.5
* */

var variance = function(numbers) {
    let mean = numbers.reduce((acc, cur) => acc + cur, 0) / numbers.length

    return numbers.reduce((acc, cur) => acc + Math.pow(cur - mean, 2), 0) / numbers.length
};