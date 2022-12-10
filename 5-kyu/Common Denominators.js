let convertFrac = (list) => {
    let max = Math.max(...list.map((elem) => elem[1]));

    while (true) {
        if (list.every((s) => max % s[1] === 0)) {
            break;
        }
        max++;
    }

    return list
        .map((elem) => [max / elem[1] * elem[0], max])
        .map((elem) => `(${elem.join`,`})`).join``;
};