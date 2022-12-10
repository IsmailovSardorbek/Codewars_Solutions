function interleave() {
  let arr = [...arguments];

  let maxLength = Math.max(...arr.map((x) => x.length));

  arr.forEach((current) => {
    while (current.length < maxLength) {
      current[current.length] = null;
    }
  });

  while (arr.length < maxLength) {
    arr.push(" ".repeat(maxLength).split(""));
  }

  let result = [];

  arr.forEach((current, index) => {
    for (let i = 0; i < arr.length; i++) {
      result.push(arr[i][index]);
    }
  });
  return result.filter((x) => x !== " " && x !== undefined);
}
