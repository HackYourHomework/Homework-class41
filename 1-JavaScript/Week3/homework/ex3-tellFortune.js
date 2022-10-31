'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/1-JavaScript/Week3#exercise-3-be-your-own-fortune-teller

Why pay a fortune teller when you can just program your fortune yourself?

1. Create four arrays, `numKids`, `partnerNames`, `locations` and `jobTitles`. 
   Give each array five random values that have to do with the name of 
   the variable.

2. Complete the function `selectRandomly`. This function should take an array 
   as a parameter and return a randomly selected element as its return value.

3. Complete the function named `tellFortune` as follows:

   - It should take four arguments (in the order listed): 
     * the array with the options for the number of children, 
     * the array with the options for the partner's name, 
     * the array with the options for the geographic location and 
     * the array with the options for the job title.
   - It should use the `selectRandomly` function to randomly select values from 
     the arrays.
   - It should return a string: "You will be a `jobTitle` in `location`, 
    married to `partnerName` with `numKids` kids."

4. Call the function three times, passing the arrays as arguments. Use `
   console.log` to display the results.

Note: The DRY principle is put into practice here: instead of repeating the code to 
randomly select array elements four times inside the `tellFortune` function 
body, this code is now written once only in a separated function.
-----------------------------------------------------------------------------*/

// This function should take an array as its parameter and return
// a randomly selected element as its return value.
function selectRandomly(arr) {
  return arr[Math.floor(Math.random() * 5)];
}

function tellFortune(kids, names, locs, jobs) {
  const job = selectRandomly(jobs);
  const article =
    ['a', 'o', 'e', 'i', 'u'].includes(job[0]) === true ? 'an' : 'a';
  const numKids = selectRandomly(kids);
  return `You will be ${article} ${job} in ${selectRandomly(
    locs
  )}, married to ${selectRandomly(names)} with ${numKids} ${
    numKids > 1 ? 'kids' : 'child'
  }.`;
}

function main() {
  const numKids = [6, 2, 3, 4, 5];

  const partnerNames = ['John', 'Juan', 'Ivan', 'Han', 'Johannes'];

  const locations = [
    'London',
    'Barcelona',
    'Petersburg',
    'Amsterdam',
    'Helsinki',
  ];

  const jobTitles = [
    'head engineer',
    'manager',
    'developer',
    'team leader',
    'financial analyst',
  ];

  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = tellFortune;
