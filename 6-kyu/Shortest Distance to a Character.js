const shortesttoChar = (s, c) => {
  return !s.includes(c) || c === ''
    ? []
    : [...s].map((char, index) => {
        if (char === c) return 0

        let temp = []

        for (let i = index; i >= 0; i--) {
          if (s[i] === c) {
            temp = [...temp, index - i]
          }
        }

        for (let i = index; i < s.length; i++) {
          if (s[i] === c) {
            temp = [...temp, i - index]
          }
        }

        return Math.min(...temp)
      })
}
