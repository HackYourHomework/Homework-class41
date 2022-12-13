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
  return new Promise((resolve, reject) => {
    const randomRollsToDo = Math.floor(Math.random() * 8) + 3;
    console.log(`Die scheduled for ${randomRollsToDo} rolls...`);

    const rollOnce = (roll) => {
      const value = Math.floor(Math.random() * 6) + 1;
      console.log(`Die value is now: ${value}`);

      if (roll > 6) {
        reject(Error('Oops... Die rolled off the table.'));
      }
      if (roll === randomRollsToDo) {
        resolve(`Success! Die settled on ${value}.`);
      }

      if (roll < randomRollsToDo) {
        setTimeout(() => rollOnce(roll + 1), 500);
      }
    };

    rollOnce(1);
  });
}

function main() {
  rollDie()
    .then((message) => {
      console.log(message);
    })
    .catch((err) => {
      console.error(err);
    });
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = rollDie;

/*
>>>>> First i am having this error:

Die scheduled for 10 rolls...
Die value is now: 2
Die value is now: 5
Die value is now: 4
Die value is now: 4
Die value is now: 3
Die value is now: 3
Die value is now: 5
Error: Oops... Die rolled off the table.
    at rollOnce (c:\Users\husse\HYF\MODULE_2\Homework-class41\3-UsingAPIs\Week1\homework\ex3-rollDie.js:24:16)
    at Timeout._onTimeout (c:\Users\husse\HYF\MODULE_2\Homework-class41\3-UsingAPIs\Week1\homework\ex3-rollDie.js:31:26)
    at listOnTimeout (node:internal/timers:559:17)
    at processTimers (node:internal/timers:502:7)
Die value is now: 4
Die value is now: 4
Die value is now: 2

>>>>> The problem is still occurring and this is because whenever the randomRollsToDo is > 6,
both following conditions will apply at a certain point:
      if (roll > 6) {}
      and
      if (roll < randomRollsToDo)

*/
