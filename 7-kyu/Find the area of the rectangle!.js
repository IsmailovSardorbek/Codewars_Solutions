function area(d, l) {
  return d < l
    ? 'Not a rectangle'
    : +(Math.sqrt(d ** 2 - l ** 2) * l).toFixed(2)
}
