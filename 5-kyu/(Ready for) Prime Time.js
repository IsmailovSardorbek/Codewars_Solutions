function prime(num) {
  let arr = [];

  for (let i = 2; i <= num; i++) {
    let currentNumber = i;
    let isPrime = true;
    for (let j = 2; j < currentNumber; j++) {
      if (currentNumber % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      arr[arr.length] = currentNumber;
    }
  }

  return arr;
}
