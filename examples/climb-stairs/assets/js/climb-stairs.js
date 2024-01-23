/** 
Author : Build Rise Shine 

Created : 2023

Script : Climb stairs

Description : Write an algorithm to find out different ways to climb stairs  

   You are climbing a staircase. It takes n steps to reach the top.
   
   Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

(c) Copyright by BRS Studio. 
**/

/*
Constraints for Algorithm
    -->  1 <= n <= 45
*/

// Algorithm
let climbStairs = function (n) {
  if (n < 2) {
    return 1;
  }

  let firstStep = 1;

  let secondStep = 1;

  let thirdStep = 0;

  // calculate 3rd step and update 1st and 2nd
  for (let i = 2; i <= n; i++) {
    thirdStep = firstStep + secondStep; // 1  + 1 = 2 // 1 + 2

    firstStep = secondStep; // 1 // 2

    secondStep = thirdStep; // 2 // 3
  }

  return thirdStep;
};


// Implementation
const staircase = 6 // total steps in the staircase // 1 1 1, 1 2, 2 1
const ways = climbStairs(staircase)

// Log the results
console.log(`We can reach the top of the staircase in ${ways} ways`);

// BIG O Notation
// Time complexity - O(n) - where 'n' is the number of stairs/steps
// Space complexity - O(1)