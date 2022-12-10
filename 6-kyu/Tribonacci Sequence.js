/* 
    As the name may already reveal, it works basically like a Fibonacci, 
    but summing the last 3 (instead of 2) numbers of the sequence to generate the next.
*/

const tribonacci = (signature, n) => {
  if (n < signature.length) return signature.slice(0, n);

  for (let i = 3; i < n; i++) {
    signature.push(signature[i - 1] + signature[i - 2] + signature[i - 3]);
  }

  return signature;
};
