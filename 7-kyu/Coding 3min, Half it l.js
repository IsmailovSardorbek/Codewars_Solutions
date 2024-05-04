function halfIt(n) {
  return typeof n !== 'number'
    ? 0
    : Math.sign(n) *
        [...String(Math.abs(n))].map((x) => (x === '.' ? x : Math.round(x / 2)))
          .join``
}
