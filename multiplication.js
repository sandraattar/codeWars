//This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function simpleMultiplication(number) {
    let prod = 0;
    if (number % 2 == 0 ){
      prod = number * 8;
    }else {
       prod = number * 9;
    }
    return prod
}
