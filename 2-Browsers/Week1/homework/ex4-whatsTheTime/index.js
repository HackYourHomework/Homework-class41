'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
const h3 = document.createElement('h3');
document.body.appendChild(h3);
h3.textContent = 'Page is loading';
const interval = setInterval(addCurrentTime, 1000); // Play addCurrentTime() for every 1000ms
function addCurrentTime() {
  const date = new Date(); // New date created
  const localTime = date.toLocaleTimeString('en-US', { hour12: false }); // Date designed for US time format
  h3.textContent = localTime; // For h3 to constantly change: it should be inside the function
  console.log(localTime);
}

window.onload = interval;
