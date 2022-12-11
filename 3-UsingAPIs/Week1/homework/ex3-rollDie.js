'use strict';

function rollDie() {
  return new Promise((resolve, reject) => {
    // Compute a random number of rolls (3-10) that the die MUST complete
    const randomRollsToDo = Math.floor(Math.random() * 8) + 3;
    console.log(`Die scheduled for ${randomRollsToDo} rolls...`);

    const rollOnce = (roll) => {
      // Compute a random die value for the current roll
      const value = Math.floor(Math.random() * 6) + 1;
      console.log(`Die value is now: ${value}`);

      // Use reject to notify that the die rolled off the table after 6 rolls
      if (roll > 6) {
        reject(new Error('Oops... Die rolled off the table.'));
      }

      // Use resolve to communicate the final die value once finished rolling
      if (roll === randomRollsToDo) {
        resolve(value);
      }

      // Schedule the next roll todo until no more rolls to do
      if (roll < randomRollsToDo) {
        setTimeout(() => rollOnce(roll + 1), 500);
      }
    };

    // Start the initial roll
    rollOnce(1);
  });
}

function main() {
  rollDie()
    .then((resolved) => {
      console.log(`Success! Die settled on ${resolved}.`);
    })
    .catch((error) => console.log(error));
}

/*

No successful callback happens if an error has been thrown 
by rollOnce function. Supposedly, more than one callback 
are possible and both an error and a result may be returned. 
Promises allow us to handle all the errors inside a Promise block 
with a single catch block attached at the end. Only one state
is possible: pending, resolved (fulfilled), or rejected.
In the case of a state reject, there is nothing else is returned
by a Promise.

*/

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = rollDie;
