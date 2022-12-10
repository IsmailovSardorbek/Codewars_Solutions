/*
    * Examples:
    " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
    "    Hello     World   "  =>  "#HelloWorld"
    ""   =>  false
*
* */

function generateHashtag (str) {
    if(str.trim().length === 0) return false

    let res = '#' + str.trim().toLowerCase().split``
        .map(el => el.charAt(0).toUpperCase() + el.slice(1)).join``

    return res.length > 140 ? false : res
}
