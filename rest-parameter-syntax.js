/**
 * To run this file in Gitpod, use the 
 * command node rest-parameter-syntax.js in the terminal
 */

// Regular function call  - Consider a situation where you  want to add a few numbers together.  
const sumAll = (a,b,c) => a + b + c;
let sum = sumAll(1,2,3);
console.log("Sum:", sum);

// Extra arguments are ignored
            // what if you wanted to sum an arbitrary number of parameters?  
            // JavaScript will allow you to pass in as many arguments as you want regardless of how many  
            // are specified when you define the function.
let sum2 = sumAll(1,2,3,4,5,6)  //Last three will be ignored,giving value of 6 - not what we want so use rest syntax
console.log("Sum 2:", sum2);

// Function using ...rest

            // This time it's going to squash any extra parameters passed into the function  
            // into a new parameter called rest, which will be  an array within the function.
            // This parameter can technically be called anything you want, but I'm calling it rest here
            // to demonstrate that it signifies the rest of the parameters.
const sumRest = (a,b,c, ...rest) => {
    let sum = a + b + c;
    for (let i of rest) {
        sum += i;
    }
    return sum;
}
let sum3 = sumRest(1,2,3,4,5,6);
console.log("Sum 3:", sum3);