const hexStringToRGB = (hexString) => {
  let rgb = { r: "", g: "", b: "" };
  hexString = hexString.toLowerCase().replace(`#`, ``).split``.map(
    (elem, index) => (index % 2 === 0 && index !== 0 ? `-${elem}` : elem)
  ).join``.split`-`.map((elem) => parseInt(elem, 16));

  for (let key in rgb) {
    rgb[key] = hexString.shift();
  }
  return rgb;
};
