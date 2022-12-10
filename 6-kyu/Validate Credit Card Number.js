function validate(n) {
  let arr = [...String(n)].map((x) => parseInt(x));

  let sum =
    arr.length % 2 === 0
      ? arr
          .map((x, i) => (i % 2 === 0 ? x * 2 : x))
          .map((x) =>
            x > 9 ? [...String(x)].reduce((t, c) => parseInt(c) + t, 0) : x
          )
          .reduce((t, c) => t + c, 0)
      : arr
          .map((x, i) => (i % 2 ? x * 2 : x))
          .map((x) =>
            x > 9 ? [...String(x)].reduce((t, c) => parseInt(c) + t, 0) : x
          )
          .reduce((t, c) => t + c, 0);

  return sum % 10 === 0;
}
