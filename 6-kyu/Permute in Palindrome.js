/* 
    Write a function that will check whether ANY permutation of the characters of the input string is a palindrome. Bonus points for a solution that is efficient and/or that uses only built-in language functions. Deem yourself brilliant if you can come up with a version that does not use any function whatsoever.

    Example:
    
    madam -> True
    adamm -> True
    junk -> False
*/

function permuteAPalindrome(input) {
  return (
    [...new Set(input)].filter(
      (x) => [...input].filter((e) => e === x).length % 2 !== 0
    ).length < 2
  );
}
