/* 
Examples
    "(){}[]"   =>  True
    "([{}])"   =>  True
    "(}"       =>  False
    "[(])"     =>  False
    "[({})](]" =>  False
*/

function validBraces(braces) {
  let stack = [],
    opening = ["(", "{", "["],
    closing = [")", "}", "]"];

  for (let i = 0; i < braces.length; i++) {
    if (opening.includes(braces[i])) {
      stack.push(braces[i]);
    } else {
      if (
        closing.indexOf(braces[i]) === opening.indexOf(stack[stack.length - 1])
      ) {
        stack.pop();
      } else return false;
    }
  }
  return stack.length === 0;
}
