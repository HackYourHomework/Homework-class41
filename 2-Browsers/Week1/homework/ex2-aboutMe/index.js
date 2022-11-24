'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/
document.body.style.fontFamily = 'Arial, sans-serif';
function fillIn(span, content) {
  return (document.querySelector(span).textContent = content);
}
fillIn('#nickname', 'Ahmad');
fillIn('#fav-food', 'Pizza');
fillIn('#hometown', 'Syria');

const items = document.querySelectorAll('li');
for (const item of items) {
  item.classList.add('list-item');
}
