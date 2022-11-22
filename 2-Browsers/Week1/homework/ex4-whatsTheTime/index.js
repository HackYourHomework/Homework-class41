'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
window.addEventListener('DOMContentLoaded', () => {
  function addCurrentTime() {
    const currentTime = new Date();
    let hours = currentTime.getHours();
    hours = hours < 10 ? '0' + hours : hours;
    let minutes = currentTime.getMinutes();
    minutes = minutes < 10 ? '0' + minutes : minutes;
    let seconds = currentTime.getSeconds();
    seconds = seconds < 10 ? '0' + seconds : seconds;
    const time = hours + ':' + minutes + ':' + seconds;
    clock.textContent = time;
  }
  const clock = document.createElement('span');
  clock.id = 'clock';
  document.body.appendChild(clock);
  clock.style.fontSize = '20vw';
  clock.style.color = '#004AAD';
  clock.style.fontFamily = '"Comic Sans MS", "Comic Sans", cursive';
  setInterval(addCurrentTime, 1000);
});
