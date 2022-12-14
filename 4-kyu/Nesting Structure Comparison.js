Array.prototype.sameStructureAs = function (other) {
  if (!(this instanceof Array) || !(other instanceof Array)) return false;

  let fst = check(this),
    sec = check(other);

  return fst === sec;

  function check(array) {
    if (!(array instanceof Array)) return "";
    let s = "";
    for (let i = 0; i < array.length; i++) {
      if (array[i] instanceof Array) {
        s += i + array[i].length + "[" + check(array[i]) + "]";
      }
    }
    return s;
  }
};
