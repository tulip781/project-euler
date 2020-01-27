// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

// Sum of Multiples Of Three

const numberOfThrees = Math.floor(1000 / 3);

const firstMultipleOfThree = 3;
const lastMultipleOfThree = 3 * numberOfThrees;

const sumOfThrees = numberOfThrees * ((firstMultipleOfThree + lastMultipleOfThree) / 2);


// Sum of Multiples of 5

const numberOfFives = (1000 / 5) - 1;


const firstMultipleOfFive = 5;
const lastMutlipleOfFive = 5 * numberOfFives;

const sumOfFives = numberOfFives * ((firstMultipleOfFive / 2) + ( lastMutlipleOfFive / 2));
console.log(sumOfFives);

// Sum of lowest common multiple (3x5) = 15

const numberLowestCommonMultiple = Math.floor(1000 / 15);

const firstMultipleOfLCM = 15;
const lastMutlipleOfLCM = 15 * numberLowestCommonMultiple;

const sumOfLCM = numberLowestCommonMultiple * ((firstMultipleOfLCM / 2) + ( lastMutlipleOfLCM / 2));

// Answer

const answer = sumOfThrees + sumOfFives - sumOfLCM

// 233168

