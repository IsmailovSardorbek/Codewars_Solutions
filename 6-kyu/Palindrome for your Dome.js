/* 
    EXAMPLES:

    "Amore, Roma" => valid
    "A man, a plan, a canal: Panama" => valid
    "No 'x' in 'Nixon'" => valid
    "Abba Zabba, you're my only friend" => invalid
*/

function palindrome(string) {
  return [...string.toLowerCase()]
    .filter((e) => e.toLowerCase() !== e.toUpperCase())
    .every((e, i, l) => e === l[l.length - 1 - i]);
}
