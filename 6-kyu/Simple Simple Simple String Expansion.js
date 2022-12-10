/* 
    EXAMPLES:

    "3D2a5d2f"  -->  "DDDaadddddff"    # basic example: 3 * "D" + 2 * "a" + 5 * "d" + 2 * "f"
    "3abc"      -->  "aaabbbccc"       # not "aaabc", nor "abcabcabc"; 3 * "a" + 3 * "b" + 3 * "c"
    "3d332f2a"  -->  "dddffaa"         # multiple consecutive digits: 3 * "d" + 2 * "f" + 2 * "a"
    "abcde"     -->  "abcde"           # no digits
    "1111"      -->  ""                # no characters to repeat
    ""          -->  ""                # empty string
*/

const stringExpansion = (str) => {
  return [...str].map((s) =>
    s.toLowerCase() === s.toUpperCase() ? `*${s}` : s
  ).join``.split`*`
    .filter((s) => s !== "" && isNaN(Number(s)))
    .map(
      (s) =>
        [...s].map((e) => (!isNaN(Number(e)) ? `${e}-` : e)).join``.split`-`
    )
    .map((s) =>
      s.length === 2 ? [...s[1]].map((e) => e.repeat(s[0])).join`` : s.join``
    ).join``;
};
