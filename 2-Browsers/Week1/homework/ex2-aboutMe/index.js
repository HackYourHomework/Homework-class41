'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/

function main() {
   const nickName = document.getElementById('nickname');
   nickName.textContent = 'Vladimir';
   const favFood = document.getElementById('fav-food');
   favFood.textContent = 'Khinkali';
   const homeTown = document.getElementById('hometown');
   homeTown.textContent = 'Saint-Petersburg';
   const li = document.querySelectorAll('li');
   li.forEach((i) => i.classList.add('list-item'));
   document.body.style.fontFamily = 'Arial, sans-serif'; //added to pass the test
}

window.addEventListener('load', main);