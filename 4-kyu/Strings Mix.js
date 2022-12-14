function mix(s1, s2) {
  let res = [];
  let arr1 = [...s1.trim()]
    .filter((x) => x.toUpperCase() !== x.toLowerCase())
    .filter((x) => x === x.toLowerCase());

  let arr2 = [...s2.trim()]
    .filter((x) => x.toUpperCase() !== x.toLowerCase())
    .filter((x) => x === x.toLowerCase());

  for (let i = s1.length - 1; i >= 0; i--) {
    let value = s1[i];

    if (res.some((e) => e[1].indexOf(value) !== -1)) continue;
    else if (
      (arr1.filter((e) => e === value).length >
        arr2.filter((e) => e === value).length ||
        arr2.filter((e) => e === value).length === 0) &&
      arr1.filter((e) => e === value).length > 1
    ) {
      res.push(["1:", value.repeat(arr1.filter((e) => e === value).length)]);
    } else if (
      arr2.filter((e) => e === value).length >
        arr1.filter((e) => e === value).length &&
      arr2.filter((e) => e === value).length > 1
    ) {
      res.push(["2:", value.repeat(arr2.filter((e) => e === value).length)]);
    } else if (
      arr1.filter((e) => e === value).length ===
        arr2.filter((e) => e === value).length &&
      arr1.filter((e) => e === value).length > 1
    ) {
      res.push(["=:", value.repeat(arr1.filter((e) => e === value).length)]);
    }
  }

  for (let i = s2.length - 1; i >= 0; i--) {
    let value = s2[i];
    if (res.some((e) => e[1].indexOf(value) !== -1)) continue;
    else if (
      arr2.filter((e) => e === value).length >
        arr1.filter((e) => e === value).length &&
      arr2.filter((e) => e === value).length > 1
    ) {
      res.push(["2:", value.repeat(arr2.filter((e) => e === value).length)]);
    } else if (
      arr2.filter((e) => e === value).length ===
        arr2.filter((e) => e === value).length &&
      arr1.filter((e) => e === value).length > 1
    ) {
      res.push(["=:", value.repeat(arr2.filter((e) => e === value).length)]);
    }
  }

  return res
    .map((x) => x.join(" "))
    .sort()
    .map((x) => x.split(" "))
    .sort((a, b) => b[1].length - a[1].length)
    .map((x) => x.join(""))
    .join("/");
}
