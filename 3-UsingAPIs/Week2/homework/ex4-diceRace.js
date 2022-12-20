'use strict';
//const { reject } = require('lodash');
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/blob/main/3-UsingAPIs/Week2/README.md#exercise-4-dice-race

1. Complete the function `rollDice()` by using `.map()` on the `dice` array 
   to create an array of promises for use with `Promise.race()`.
2. Refactor the function `main()` using async/await and try/catch.
3. Once you got this working, you may observe that some dice continue rolling 
   for some undetermined time after the promise returned by `Promise.race()` 
   resolves. Do you know why? Add your answer as a comment to the bottom of the 
   file.
------------------------------------------------------------------------------*/
// ! Do not remove this line
const rollDie = require('../../helpers/pokerDiceRoller');

function rollDice() {
  const dice = [1, 2, 3, 4, 5];

  const diceMap = dice.map((die) => {
    return new Promise(function (resolve, reject) {
      resolve(rollDie(die));
      reject((error) => {
        console.error(error);
      });
    });
  });
  return Promise.race(diceMap);
}

// Refactor this function to use async/await and try/catch
async function main() {
  try {
    const success = await rollDice();
    console.log('Resolved!', success);
  } catch (error) {
    console.log('Rejected!', error.message);
  }
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = rollDice;
//Promise.race in this case only gives us the resolved value of the first die to finish rolling, but it doesn't stop the other dices(promises)
//from continuing rolling
