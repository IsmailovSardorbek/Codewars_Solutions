/* 
Write a function that when given a number (n) returns the n-th number in the Fibonacci Sequence.
*/

const nthFibo = (n) => {
  let fib = [0, 1];

  for (let i = 2; i < n; i++) {
    fib.push(fib[i - 2] + fib[i - 1]);
  }

  return fib[n - 1];
};
