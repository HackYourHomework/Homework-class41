'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/
document.getElementById('nickname').textContent = 'Jack';
document.getElementById('fav-food').textContent = 'Pizza';
document.getElementById('hometown').textContent = 'Madrid';

document.body.style.fontFamily = 'Arial, sans-serif';

const listElement = document.querySelectorAll('ul li');
listElement.forEach((li) => (li.classList = 'list-item'));