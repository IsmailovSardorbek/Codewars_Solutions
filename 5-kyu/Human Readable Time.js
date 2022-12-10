/*
    * Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

    HH = hours, padded to 2 digits, range: 00 - 99
    MM = minutes, padded to 2 digits, range: 00 - 59
    SS = seconds, padded to 2 digits, range: 00 - 59
*
*
* */


function humanReadable (seconds) {
    return [
        ('0' + parseInt(seconds / (60  * 60))).slice(-2),
        ('0' + parseInt(seconds / 60 % 60)).slice(-2),
        ('0' + seconds % 60).slice(-2)
    ].join(':')
}