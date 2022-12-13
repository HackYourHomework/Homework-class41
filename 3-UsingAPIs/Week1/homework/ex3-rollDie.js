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

  return new Promise(function (resolve, reject) {
    for (let i = 0; i <= randomRollsToDo; i++) {
      const value = Math.floor(Math.random() * 6) + 1;
      console.log(`Die value is now: ${value}`);
      if (i === randomRollsToDo - 1) {
        resolve(value);
        return;
      }
      if (i === 5) {
        reject(new Error('Oops... Die rolled off the table.'));
        return;
      }
    }
  });
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
