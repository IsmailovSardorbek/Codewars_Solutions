/* 
Example
    createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
*/

function createPhoneNumber(numbers) {
  let phoneNumber = "(xxx) xxx-xxxx";
  for (let i in numbers) {
    phoneNumber = phoneNumber.replace("x", numbers[i]);
  }
  return phoneNumber;
}
