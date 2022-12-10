/*
*       Examples:
*
*       firstNonRepeatingLetter('a'), 'a'
        firstNonRepeatingLetter('stress'), 't'
        firstNonRepeatingLetter('moonmen'), 'e'
*
*
* */


const firstNonRepeatingLetter = s => {
    return [...s].find(n => [...s].filter(x => x.toLowerCase() === n.toLowerCase()).length === 1) === undefined ? '' : [...s].find(n => [...s].filter(x => x.toLowerCase() === n.toLowerCase()).length === 1)
}