'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/1-JavaScript/Week4#exercise-4-observable

Complete the `createObservable()` function as follows:

- The `subscribe` function should take the function passed to it as an argument
   and push it onto the `subscribers` array. (Yes, you can store functions in an
   array. Functions are treated in JavaScript like any other value.

- The `notify` function should iterate through, and call, all subscribers from 
  the `subscribers` array, passing on the notification message to each 
  subscriber.
------------------------------------------------------------------------------*/

function createObservable() {
  const subscribers = ['a','b','c'];
  return {
    subscribe: function (subscriber) {
      const func1 = function subscriber(){};
      const func2 = subscribers.push(func1); 
      },
    
    notify: function (message) {
      subscribers.forEach(function(param){
        return (message + param);
      })
    }
  };

// ! Do not change or remove the code below
module.exports = createObservable;
