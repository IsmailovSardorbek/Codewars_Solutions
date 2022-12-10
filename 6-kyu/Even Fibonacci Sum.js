/* 
Give the summation of all even numbers in a Fibonacci sequence up to, 
but not including, the number passed to your function

fibonacci(0)==0
fibonacci(33)==10
fibonacci(25997544)==19544084
*/

function fibonacci(num) {
  var a = 1,
    b = 0,
    temp;
  let res = [];
  while (true) {
    temp = a;
    a = a + b;
    res.push(a);
    b = temp;
    if (res.some((x) => x > num)) {
      break;
    }
  }

  return res
    .filter((x) => x < num)
    .filter((x) => x % 2 === 0)
    .reduce((acc, cur) => acc + cur, 0);
}
