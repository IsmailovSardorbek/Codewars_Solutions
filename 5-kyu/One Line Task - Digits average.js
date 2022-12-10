digitsAverage = f = (n) =>
  n < 10
    ? n
    : f(+[...(n += "")].map((x, i) => (x - -n[i - 1] + 1) >> 1).join(""));
