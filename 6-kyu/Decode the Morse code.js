/* MORSE_CODE object is preloaded for this kata. */

let decodeMorse = function (morseCode) {
  return morseCode
    .split(" ")
    .map((s) => (s === "" ? " " : s))
    .map((s) => (MORSE_CODE[`${s}`] ? MORSE_CODE[`${s}`] : s)).join``
    .replace(/  /g, " ")
    .trim();
};
