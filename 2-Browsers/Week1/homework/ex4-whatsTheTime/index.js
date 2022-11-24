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
    hours = addNull(hours);
    let minutes = currentTime.getMinutes(); //here is also other method possible ('0' + currentTime.getMinutes()).slice(-2) and no need to use function then;
    minutes = addNull(minutes);
    let seconds = currentTime.getSeconds();
    seconds = addNull(seconds);
    const time = `${hours}:${minutes}:${seconds}`;
    clock.textContent = time;
  }

  function addNull(number) {
    return number < 10 ? number.toString().padStart(2, '0') : number; //done with padStart method
  }

  const clock = document.createElement('span');
  clock.id = 'clock';
  document.body.appendChild(clock);
  clock.style.fontSize = '20vw';
  clock.style.color = '#004AAD';
  clock.style.fontFamily = '"Comic Sans MS", "Comic Sans", cursive';
  setInterval(addCurrentTime, 1000);
});
