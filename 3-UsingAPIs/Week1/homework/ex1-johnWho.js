'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/3-UsingAPIs/Week1#exercise-1-john-who

Rewrite this function, but replace the callback syntax with the Promise syntax:
- Have the `getAnonName` function return a `new Promise`.
- If the Promise `resolves`, pass the full name as an argument to resolve with.
- If the Promise `rejects`, pass an error as the argument to reject with: "You 
  didn't pass in a first name!"
------------------------------------------------------------------------------*/
// TODO see above

const getAnonName = (firstName, callback) => {
  const promise1 = new Promise((resolve, reject) => {
    const fullName = `${firstName} Doe`;
    setTimeout(() => {
      if (firstName) {
        resolve(callback(fullName));
      } else {
        reject(callback(new Error("You didn't pass in a first name!")));
      }
    }, 1000);
  });
  return promise1;
};

function main() {
  getAnonName('John', console.log).then((data) => {
    return data;
  });
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = getAnonName;
