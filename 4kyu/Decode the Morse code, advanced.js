var decodeBits = function (bits) {
  bits = bits.replace(/^0+/g, "").replace(/0+$/g, "");

  const repetitions = Math.min(
    ...bits.match(/(.)\1*/g).map((group) => group.length)
  );
  return bits
    .replace(new RegExp("0".repeat(repetitions), "g"), "0")
    .replace(new RegExp("1".repeat(repetitions), "g"), "1")
    .replace(/111/g, "-")
    .replace(/000/g, " ")
    .replace(/1/g, ".")
    .replace(/0/g, "");
};

var decodeMorse = function (morseCode) {
  const words = morseCode.split(" ".repeat(2));
  return words
    .map((w) =>
      w
        .split(" ")
        .map((letter) => MORSE_CODE[letter])
        .join("")
    )
    .join(" ");
};
