let multiply = (a, b) => {
  let st = [];
  let v1 = [...a].reverse();
  var v2 = [...b].reverse();

  for (let i = 0; i < v1.length; i++) {
    for (let j = 0; j < v2.length; j++) {
      var value = v1[i] * v2[j];
      st[i + j] = st[i + j] ? st[i + j] + value : value;
    }
  }

  for (var i = 0; i < st.length; i++) {
    var num = st[i] % 10;
    var x = Math.floor(st[i] / 10);
    st[i] = num;

    if (st[i + 1]) st[i + 1] += x;
    else if (x != 0) st[i + 1] = x;
  }

  return [...st]
    .reverse()
    .join("")
    .replace(/^(0(?!$))+/, "");
};
