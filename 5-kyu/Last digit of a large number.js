/*
        Examples:

        lastDigit("4", "1")            // returns 4
        lastDigit("4", "2")            // returns 6
        lastDigit("9", "7")            // returns 9
        lastDigit("10","10000000000")  // returns 0
* */

var lastDigit = function(str1, str2){
    return +!+str2 || Math.pow(str1.slice(-1), str2.slice(-2) % 4 || 4) % 10
}