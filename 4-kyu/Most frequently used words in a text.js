function topThreeWords(text) {
  for (let i = 0; i < text.length; i++) {
    while (
      text.includes(text[i]) &&
      text[i].toLowerCase() === text[i].toUpperCase() &&
      text[i] !== `'` &&
      text[i] !== " "
    ) {
      text = text.replace(text[i], "");
    }
  }
  let arr = text
    .trim()
    .toLowerCase()
    .split(" ")
    .filter((s) => s !== `'` && s !== "");

  let uniqueSet = [];

  arr.forEach((current) => {
    if (!uniqueSet.includes(current)) {
      uniqueSet.push(current);
    }
  });
  uniqueSet.sort(
    (a, b) =>
      arr.filter((e) => e === b).length - arr.filter((e) => e === a).length
  );

  return uniqueSet.slice(0, 3);
}
