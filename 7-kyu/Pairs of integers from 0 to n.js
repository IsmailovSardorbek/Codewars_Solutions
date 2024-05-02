function generatePairs(n) {
  let res = []

  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
      if (i <= j) {
        res = [...res, [i, j]]
      }
    }
  }

  return res
}
