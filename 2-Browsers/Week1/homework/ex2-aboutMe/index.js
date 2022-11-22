'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/
document.body.style.fontFamily = 'Arial, Helvetica, sans-serif';
const nickname = document.getElementById('nickname');
const favFood = document.getElementById('fav-food');
nickname.textContent = 'Andrei';
favFood.textContent = 'Pelmeni';
const infoUl = document.querySelectorAll('li');
for (let i = 0; i < infoUl.length; i++) {
  infoUl[i].className = 'list-item';
}
