/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Note: If the number is a multiple of both 3 and 5, only count it once.

*/
function solution(number){
console.log(number)
  //var that stores the sum
  let sum=0;
  //loop through the numbers and check if they're divisible by 3 or 5
  for (i=3; i<number; i++){
    if((i % 3 === 0) || (i % 5 === 0)){
 // don't use an array because it will slow down the program
//      var arrayOfMultiples =[]
//      arrayOfMultiples.push(i)
      sum += i;
    }
  }
  return sum
}
