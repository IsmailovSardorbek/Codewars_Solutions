const sumSquareEvenRootOdd = (ns) => {
  return +ns
    .map((n) => (n % 2 ? Math.sqrt(n) : n ** 2))
    .reduce((acc, cur) => acc + cur, 0)
    .toFixed(2)
}
