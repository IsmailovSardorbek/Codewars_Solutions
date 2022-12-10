const maxZeroSequence = (arr) => {
    let sums = [];

    arr = [''].concat(arr.concat(['']))

    arr.map((current, index) => {
        arr.map((value, position) => {
            let val = arr.slice(index, position);
            let sum = val.reduce((acc, cur) => acc + cur, 0);
            if (sum === 0) sums.push([val, sum]);
        });
    });

    return sums.find(
        (s) => s[0].length === Math.max(...sums.map((e) => e[0].length))
    ).shift()
};