/* 
Example 1:
    a1 = ["arp", "live", "strong"]

    a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

    returns ["arp", "live", "strong"]

Example 2:
    a1 = ["tarp", "mice", "bull"]

    a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

    returns []
*/

function inArray(array1, array2) {
  let item;

  let result = [];
  for (let i in array1) {
    item = array2.find((item) => item.includes(array1[i]));
    if (item !== undefined) {
      result.push(array1[i]);
    } else continue;
  }

  return result.sort();
}
