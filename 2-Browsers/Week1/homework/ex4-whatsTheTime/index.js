'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
function addCurrentTime() {
  const div = document.createElement('div');
  document.body.appendChild(div);

  setInterval(generateNewTime, 1000);

  function generateNewTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const currentTime = document.createElement('p');
    currentTime.textContent = `${hours}:${minutes}:${seconds}`;
    div.appendChild(currentTime);
    console.log(currentTime.textContent);
  }
}

window.onload = function () {
  addCurrentTime();
};
