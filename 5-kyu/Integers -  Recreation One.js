/*
*
*       Find all integers between m and n (m and n integers with 1 <= m <= n) such that
*       the sum of their squared divisors is itself a square.
* */

const listSquared = (m, n) => {
    let list = [];

    for (let i = m; i <= n; i++) {
        let temp = [];
        let currentNumber = i;

        for (let j = 1; j <= currentNumber; j++) {
            if (currentNumber % j === 0) {
                temp[temp.length] = j;
            }
        }

        let sum = temp.reduce((acc, cur) => acc + Math.pow(cur, 2), 0);

        if (Number.isInteger(Math.sqrt(sum))) {
            list[list.length] = [currentNumber, sum];
        }
    }
    return list
};