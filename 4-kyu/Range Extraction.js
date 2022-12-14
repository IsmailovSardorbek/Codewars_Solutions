function solution(list) {
  const ranges = [[list[0]]];

  let currentRange = ranges[0];

  for (let i = 1; i < list.length; i++) {
    const currentNumber = list[i];
    const lastValueInRange = currentRange[currentRange.length - 1];

    if (Math.abs(currentNumber - lastValueInRange) === 1) {
      currentRange.push(currentNumber);
    } else {
      currentRange = [currentNumber];
      ranges.push(currentRange);
    }
  }

  return ranges
    .map((range) => {
      if (range.length === 1) return "" + range[0];
      if (range.length === 2) return range.join(",");
      return "" + range[0] + "-" + range[range.length - 1];
    })
    .join(",");
}
