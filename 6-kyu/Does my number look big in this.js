/* 
A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits,
 each raised to the power of the number of digits in a given base. 
*/

function narcissistic(value) {
  return value < 10
    ? true
    : value
        .toString()
        .split("")
        .reduce(
          (total, cur) =>
            total + Math.pow(parseInt(cur), value.toString().length),
          0
        ) === value;
}
