let p = (num, cipher) => (1 << cipher) * (num >> (cipher + 1));
let restOfBinary = (num, cipher) =>
  Math.max(0, (num % ((1 << cipher) << 1)) - (1 << cipher) + 1);
let col = (num, cipher) => p(num, cipher) + restOfBinary(num, cipher);
let addUpTo = (num) => {
  var bit = 0,
    total = 0;
  while (num >> bit > 0) total += col(num, bit++);
  return total;
};
var countOnes = (l, r) => addUpTo(r) - addUpTo(l - 1);
