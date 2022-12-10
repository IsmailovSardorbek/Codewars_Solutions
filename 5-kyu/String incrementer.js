/*
*    Examples:

    foo -> foo1

    foobar23 -> foobar24

    foo0042 -> foo0043

    foo9 -> foo10

    foo099 -> foo100
*
*
*
* */

function incrementString (strng) {
    let arr = [...strng]

    if(!arr.some(x => Number.isInteger(parseInt(x))))
        return `${arr.join('')}1`

    let letters = arr.filter(e => e.toUpperCase() !== e.toLowerCase())

    let nums = arr.filter(e => e.toUpperCase() === e.toLowerCase())
    nums = parseInt(nums.join('')) + 1

    return [letters.join(''), ...String(nums)]
        .join('').length < strng.length ?
        [letters.join(''), ...('0'.repeat(strng.length - [letters.join(''), ...String(nums)].join('').length)+nums)]
            .join('') : [letters.join(''), ...String(nums)].join('')
}