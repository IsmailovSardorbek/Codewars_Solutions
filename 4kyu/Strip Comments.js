function solution(input, markers) {
  let arr = input.split("\n");

  for (let i in markers) {
    arr = arr.map((el) => {
      var ind = el.indexOf(markers[i]);
      if (ind !== -1) {
        return el.substring(0, ind);
      } else {
        return el.replace(/\s*$/, "");
      }
    });
  }

  return arr.join("\n").trim();
}
