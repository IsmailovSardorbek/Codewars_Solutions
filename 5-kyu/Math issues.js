Math.round = function(number) {
    return Number.isInteger(number) ? number : String(number).split('.')[1][0] < 5 ? +String(number).split('.')[0] : +String(number).split('.')[0] + 1
};

Math.ceil = function(number) {
    return Number.isInteger(number) ? number : +String(number).split('.')[0] + 1
};

Math.floor = function(number) {
    return Number.isInteger(number) ? number : +String(number).split('.').slice(0, 1).join('')
};