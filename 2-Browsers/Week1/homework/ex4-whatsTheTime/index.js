'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
function addCurrentTime() {
  // TODO complete this function


  const today = new Date();
  let hour = today.getHours(),
    minute = today.getMinutes(),
    second = today.getSeconds();

  if (minute < 10) minute = '0' + minute;
  if (hour < 10) hour = '0' + hour;
  if (second < 10) second = '0' + second;
  const time = hour + ':' + minute + ':' + second;
  return time;
}

// TODO execute `addCurrentTime` when the browser has completed loading the page


window.onload = () => setInterval(addCurrentTime, 1000);

document.write(addCurrentTime());

console.log(addCurrentTime());