'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
function addCurrentTime() {
  // eslint-disable-next-line no-autofix/prefer-const
  let date = new Date();
  // eslint-disable-next-line no-autofix/prefer-const
  let hours = date.getHours();
  // eslint-disable-next-line no-autofix/prefer-const
  let minutes = date.getMinutes();
  // eslint-disable-next-line no-autofix/prefer-const
  let seconds = date.getSeconds();

  const div = document.createElement('div');

  const currentTime = document.createElement('p');
  currentTime.textContent = `${hours}:${minutes}:${seconds}`;

  document.body.appendChild(div);
  div.appendChild(currentTime);
}

window.onload = function () {
  setInterval(addCurrentTime, 1000);
};
