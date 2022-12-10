function range(start, end, step) {
  if (!end && !step) {
    if (start > 0) return new Array(start).fill(0).map((s, i) => i);
    else return [];
  }

  if (step === undefined) {
    let arr = [];

    for (let i = start; i < end; i++) {
      arr[arr.length] = i;
    }
    return arr;
  }
  let res = [];
  if (step === 0 && end > 0) return new Array(end - start).fill(start);

  for (let i = start; i < end; i += step) {
    res.push(i);
  }
  return res;
}
