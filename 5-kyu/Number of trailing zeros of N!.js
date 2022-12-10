/*
*   Write a program that will calculate the number of trailing zeros in a factorial of a given number.
    Examples:

    zeros(6) = 1
    # 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero

    zeros(12) = 2
    # 12! = 479001600 --> 2 trailing zeros
*
* */

zeros = n => {
    let s = 0

    while(n > 0) {
        n = Math.floor(n / 5)
        s += n
    }
    return s
}