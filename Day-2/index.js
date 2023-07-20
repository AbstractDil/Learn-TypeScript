"use strict";
// Write a code to add 2 numbers and print the sum of the numbers
// create a function to add 2 numbers 
//@ts-ignore 
function addTwoNum(a, b) {
    return a + b;
}
// call the function 
console.log(addTwoNum(2, 3)); // output : 5
console.log(addTwoNum(5, "Sagar")); // output : 5Sagar
/*
This is because we have not defined the type of the parameters in the function
So, we can define the type of the parameters in the function as follows.
*/
//@ts-ignore
function sumTwoNumbers(x, y) {
    return x + y;
}
//console.log(sumTwoNumbers(5,"Sagar")); 
// Here is the error because we have defined the type of the parameters as number
console.log(sumTwoNumbers(5, 5)); // output : 10
// console.log(sumTwoNumbers(8,"Sagar")); // this is a string because we have not defined the return type of the function 
