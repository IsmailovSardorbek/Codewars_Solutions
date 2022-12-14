determinant = (v) =>
  v.length === 1
    ? v[0][0]
    : v[0].reduce(
        (s, n, i) =>
          s +
          (i % 2 === 0 ? 1 : -1) *
            n *
            determinant(v.slice(1).map((r) => r.filter((k, j) => j !== i))),
        0
      );
