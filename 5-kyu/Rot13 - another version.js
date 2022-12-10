const rot13 = (str) => {
    return [...str].map((value) =>
        value === value.toUpperCase() && value.toUpperCase() !== value.toLowerCase()
            ? String.fromCharCode(
                value.charCodeAt(0) + 13 > 90
                    ? 64 + 13 - (90 - value.charCodeAt(0))
                    : value.charCodeAt() + 13
            )
            : value === value.toLowerCase() &&
            value.toUpperCase() !== value.toLowerCase()
                ? String.fromCharCode(
                    value.charCodeAt(0) + 13 > 122
                        ? 96 + 13 - (122 - value.charCodeAt(0))
                        : value.charCodeAt(0) + 13
                )
                : value
    ).join('')
};