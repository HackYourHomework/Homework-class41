'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/


function addCurrentTime() {
  const h1 = document.createElement('h1');

document.body.style.height = '100vh';

h1.style.cssText =
  'position:relative ; text-align : center; top : 20%; font-size : 10rem ;';
  const time = new Date();
  h1.textContent = time.toLocaleTimeString();
  document.body.append(h1);
  setInterval(function(){
    addCurrentTime()
  }, 999)
  window.addEventListener('DOMContentLoaded', function () {
    addCurrentTime();
  });
  
}

addCurrentTime()