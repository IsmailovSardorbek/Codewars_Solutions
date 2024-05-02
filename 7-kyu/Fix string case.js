function solve(s) {
  return [...s].filter((v) => v === v.toLowerCase()).length >=
    [...s].filter((v) => v === v.toUpperCase()).length
    ? s.toLowerCase()
    : s.toUpperCase()
}
