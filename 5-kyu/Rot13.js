/*
*          ROT13 is a simple letter substitution cipher that replaces a letter with the letter
*          13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.
*
* */


const rot13 = (message) => {
    return [...message]
        .map((value) =>
            value === value.toLowerCase() &&
            value.toLowerCase() !== value.toUpperCase()
                ? String.fromCharCode(
                    value.charCodeAt(0) + 13 > 122
                        ? 96 + (13- (122 - value.charCodeAt(0)))
                        : value.charCodeAt(0) + 13
                )
                : value
        )
        .map((value) =>
            value.toLowerCase() !== value.toUpperCase() &&
            value === value.toUpperCase()
                ? String.fromCharCode(
                    value.charCodeAt(0) + 13 > 90
                        ? 64 + (13 - (90 - value.charCodeAt(0)))
                        : value.charCodeAt(0) + 13
                )
                : value
        ).join('')
};