const decompose = (n) => {
  let result = decomposer(n, n * n);
  return result == null ? null : result.slice(0, result.length - 1);
};

let decomposer = (x, rem) => {
  if (rem === 0) return [x];

  for (let i = x - 1; i > 0; i--) {
    if (rem - i * i >= 0) {
      let r = decomposer(i, rem - i * i);

      if (r != null) {
        r.push(x);
        return r;
      }
    }
  }

  return null;
};
