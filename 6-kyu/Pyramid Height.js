/* 
Your task is to calculate the maximum possible height of a perfectly square pyramid (the number of complete layers) that we can build, given n number of cubes as the argument.

The top layer is always only 1 cube and is always present.
There are no hollow areas, meaning each layer must be fully populated with cubes.
The layers are thus so built that the corner cube always covers the inner 25% of the corner cube below it and so each row has one more cube than the one below it.
*/

function pyramidHeight(n) {
  let counter = 0;
  while (true) {
    n -= counter ** 2;
    if (n == 0) {
      return counter;
    } else if (n < 0) {
      return counter - 1;
    } else {
      counter++;
    }
  }
}
