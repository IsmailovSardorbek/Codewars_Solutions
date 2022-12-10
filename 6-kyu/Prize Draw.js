/* 
parameters: st a string of firstnames, we an array of weights, n a rank

return: the firstname of the participant whose rank is n (ranks are numbered from 1)

Example:
names: "COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH"
weights: [1, 4, 4, 5, 2, 1]
n: 4

The function should return: "PauL"
*/

function rank(st, we, n) {
  if (st === "") return `No participants`;
  else if (n > st.split(",").length) return `Not enough participants`;

  let str = st
    .split(",")
    .map((x) => x.toLowerCase("").split(""))
    .map((x, i) => [
      x.join(""),
      x.reduce((t, c) => t + c.charCodeAt(0) - 96 + c.length, 0) * we[i],
    ])
    .sort()
    .sort((a, b) => b[1] - a[1])[n - 1][0];

  return str.charAt(0).toUpperCase() + str.slice(1);
}
