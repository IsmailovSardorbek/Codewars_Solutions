/* 
    Example

    "camelCasing"  =>  "camel Casing"
    "identifier"   =>  "identifier"
    ""             =>  ""
*/

function solution(string) {
  return string
    .split("")
    .map((el) => (el === el.toUpperCase() ? ` ${el}` : el))
    .join("");
}
