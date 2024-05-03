function mergeArrays(a, b) {
  let res = [],
    maxL = Math.max(a.length, b.length)

  for (let i = 0; i < maxL; i++) {
    res = [...res, a[i] || null, b[i] || null]
  }

  return res.filter((n) => n)
}
