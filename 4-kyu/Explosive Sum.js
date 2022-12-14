const cache = [];

let sum = (x, y = x) => {
  if (x === 0) return 1;
  if (x < 0 || y === 0) return 0;
  if (cache[x] && cache[x][y]) return cache[x][y];
  let total = sum(x, y - 1) + sum(x - y, y);
  if (!cache[x]) {
    cache[x] = [];
  }
  cache[x][y] = total;
  return total;
};
