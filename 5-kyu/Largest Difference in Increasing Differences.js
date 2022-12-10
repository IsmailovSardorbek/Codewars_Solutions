const largestDifference = (data) => {
    if(!data) return null
    let set = new Set()

    let len = data.length;
    for (let i = 0; i < len; i++) {
        for (let j = len - 1; j >= 0; j--) {
            data[j] >= data[i] ? set.add(j - i) : null;
        }
    }
    return Math.max(...set)
};