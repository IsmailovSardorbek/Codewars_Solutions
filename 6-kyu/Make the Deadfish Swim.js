/* 
    Write a simple parser that will parse and run Deadfish.

    Deadfish has 4 commands, each 1 character long:

    i increments the value (initially 0)
    d decrements the value
    s squares the value
    o outputs the value into the return array
    Invalid characters should be ignored.
*/

const parse = (data) => {
  let arr = [...data];
  let x = 0,
    res = [];

  arr.forEach((current) => {
    if (current === "i") x++;
    if (current === "d") x--;
    if (current === "s") x = x ** 2;
    if (current === "o") res[res.length] = x;
  });
  return res;
};
