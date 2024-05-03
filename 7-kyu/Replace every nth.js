function replaceNth(text, n, oldValue, newValue, c = 0) {
  return n < 0
    ? text
    : [...text].map((v, i) => {
        if (v === oldValue) {
          c++
          if (c % n === 0) {
            return newValue
          }
        }
        return v
      }).join``
}
