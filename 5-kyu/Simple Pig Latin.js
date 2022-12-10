function pigIt(str) {
  let arr = str.split` `.map((el) => [...el]);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].join``.charCodeAt(0) < 65) continue;
    arr[i].push(arr[i].shift(), "ay");
  }
  return arr.map((el) => el.join``).join``;
}
