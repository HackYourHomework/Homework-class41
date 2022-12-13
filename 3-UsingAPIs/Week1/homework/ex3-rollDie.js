'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/3-UsingAPIs/Week1#exercise-3-roll-a-die

- Run the unmodified program and confirm that problem described occurs.
- Refactor the `rollDie()` function from callback-based to returning a
  promise.
- Change the calls to `callback()` to calls to `resolve()` and `reject()`.
- Refactor the code that call `rollDie()` to use the promise it returns.
- Does the problem described above still occur? If not, what would be your
  explanation? Add your answer as a comment to be bottom of the file.
------------------------------------------------------------------------------*/

function rollDie() {
  const randomRollsToDo = Math.floor(Math.random() * 8) + 3;
  console.log(`Die scheduled for ${randomRollsToDo} rolls...`);

  function spinningDice(rollNumber) {
    const value = Math.floor(Math.random() * 6) + 1;
    if (randomRollsToDo === rollNumber) {
      console.log(`Die value is now: ${value}`);
      return value;
    }
    if (rollNumber < 7) {
      console.log(`Die value is now: ${value}`);
    }
    if (rollNumber > 6) {
      console.log(`more then 6`);
      return 'false';
    }
    return spinningDice(rollNumber++);
  }
  const diceRoller = new Promise(function (resolve, reject) {
    const result = spinningDice(1);
    console.log(result);
    if (result !== 'fail') {
      resolve(result);
    } else {
      reject(new Error('Oops... Die rolled off the table.'));
    }
  });
  return diceRoller;
}

function main() {
  rollDie()
    .then((value) => console.log(`Success! Die settled on ${value}.`))
    .catch((error) => console.log(error.message));
}

if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = rollDie;
