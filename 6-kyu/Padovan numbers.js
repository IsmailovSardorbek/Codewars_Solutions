// P(n) = P(n-2) + P(n-3)

function padovan(n) {
  let arr = [1, 1, 1];

  for (let i = 3; i <= n; i++) {
    arr[arr.length] = arr[i - 2] + arr[i - 3];
  }
  return arr[n];
}
