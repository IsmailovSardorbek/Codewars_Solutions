var chars = (n) => [...String(n)];
let match = (s) => (n) => new RegExp(n).test(s);

const tests = [
  match("1234567890"),
  match("9876543210"),
  (n) => /^\d[0]+$/.test(n),
  (n) => n == chars(n).reverse().join(""),
  (n) => [...new Set(chars(n))].length === 1,
];

const test = (n, j) =>
  n > 99 && (j.indexOf(n) > -1 || tests.map((t) => t(n)).some((x) => !!x));

isInteresting = (n, i) =>
  test(n, i) ? 2 : +(test(n + 1, i) || test(n + 2, i));
