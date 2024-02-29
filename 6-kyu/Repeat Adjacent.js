function repeatAdjacent(s) {
  return [...s].map((e, i) => (e !== s[i + 1] ? `${e}-` : e)).join``
    .split`-`.map((s) => (s.length < 2 ? ' ' : s)).join``.trim().split` `
    .filter((s) => s.length > 1)
    .filter((s) => new Set([...s]).size > 1).length
}
