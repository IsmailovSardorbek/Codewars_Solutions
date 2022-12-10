function uniq_c(a) {
  return a.map((s, i, a) => (s !== a[i + 1] ? `${s}-` : s)).join``.split`-`
    .filter((s) => s !== "")
    .map((e) => [e.slice(0, 1), e.length]);
}
