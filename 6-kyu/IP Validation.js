/* 
    Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. 
    IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

    Examples of valid inputs:
        1.2.3.4
        123.45.67.89

    Invalid input examples:
        1.2.3
        1.2.3.4.5
        123.456.78.90
        123.045.067.089
*/

function isValidIP(str) {
  if (
    str.split(".").length !== 4 ||
    str
      .split(".")
      .some(
        (x) =>
          x > 255 ||
          x < 0 ||
          (x.startsWith("0") && x.length > 1) ||
          isNaN(parseInt(x[0])) ||
          x.split("").some((e) => isNaN(parseInt(e)))
      ) ||
    str.includes(" ")
  )
    return false;
  else return true;
}
