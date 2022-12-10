/* 
    "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.
*/

const comp = (array1, array2) => {
  return array1 && array2
    ? array2.every(
        (n) =>
          array1.includes(Math.sqrt(n)) &&
          array2.filter((e) => e === n).length ===
            array1.filter((e) => e === Math.sqrt(n)).length
      )
    : false;
};
