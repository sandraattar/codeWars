/*
Convert number to reversed array of digits
Given a random number:

C#: long;
C++: unsigned long;
You have to return the digits of this number within an array in reverse order.

Example:
348597 => [7,9,5,8,4,3]
*/

function digitize(n) {
 var initialArray = (""+n).split('');
 var reversedArray = []
 for (var i = initialArray.length - 1; i >= 0; i--) {
 reversedArray[i] = parseInt(initialArray.shift(),10);
}
  return reversedArray;
}
