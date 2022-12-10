/* 
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
*/

function toCamelCase(str) {
  if (str === "") return str;
  let sep = ["_", "-", " "];

  let arr;

  for (let i in sep) {
    if (str.includes(sep[i])) {
      arr = str.split(sep[i]);
    }
  }
  let camelCase = arr.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  if (arr[0] !== camelCase[0]) {
    camelCase[0] = camelCase[0].charAt(0).toLowerCase() + camelCase[0].slice(1);
  }
  return camelCase.join("");
}
