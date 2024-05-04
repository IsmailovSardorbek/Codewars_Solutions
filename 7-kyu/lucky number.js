function isLucky(n) {
  return [...String(n)].map(Number).reduce((acc, cur) => acc + cur, 0) % 9 === 0
}
