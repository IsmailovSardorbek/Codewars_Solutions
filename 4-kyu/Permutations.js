function permutations(str) {
  if (str.length <= 2)
    return str.length === 2 ? [...new Set([str, str[1] + str[0]])] : [str];

  str = str.split``.reduce(
    (acc, letter, i) =>
      acc.concat(
        permutations(str.slice(0, i) + str.slice(i + 1)).map(
          (val) => letter + val
        )
      ),
    []
  );
  return [...new Set(str)];
}
