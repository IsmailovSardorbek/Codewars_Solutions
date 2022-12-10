const greatestProduct = (input) => {
  let arr = [...`${input}`].map(Number);

  let temp = [];

  arr.forEach((current, index) => {
    temp.push(arr.slice(index, index + 5));
  });

  temp = temp
    .filter((s) => s.length === 5)
    .map((s) => s.reduce((prod, val) => prod * val));

  return temp.length === 0 ? 0 : Math.max(...temp);
};
